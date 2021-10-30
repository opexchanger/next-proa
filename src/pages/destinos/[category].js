import Head from 'next/head';
import { useEffect, useState } from 'react';
import { Router } from 'next/router';

// components
import Layout from '../../containers/Layout';
import BlocksGrid from '../../components/BlocksGrid';
import SelectOptions from '../../components/SelectOptions';
import FullLoader from '../../components/Loaders/FullLoader';
import { useSelection } from '../../context/selectionContext';


// data from cms
import categoriesData from '../../data/categories.preval';
import travelsData from '../../data/travels.preval';
import regionsData from '../../data/regions.preval';
import subRegionsData from '../../data/subRegions.preval';

// styles
import styles from './destinos.module.scss';
import utilStyles from '../../styles/utils.module.scss';
import Hero from '../../components/Hero';

export default function Destinos({ category, categoryTravels, categoryRegions, categorySubRegions }) {

  const allRegions = {
    id: 0,
    name: 'Todas',
    travelsCount: categoryTravels.length
  };

  const {
    selectedRegion,
    setSelectedRegion,
    selectedSubRegion,
    setSelectedSubRegion,
  } = useSelection();

  const [isLoading, setLoader] = useState(true);

  // TODO fazer os menus enviarem já o allRegions?
  useEffect(() => {
    if (!selectedRegion) {
      setSelectedRegion(allRegions);
    }
  }, [selectedRegion]);

  // TODO limpar o listener no retorno
  useEffect(() => {
    setLoader(false);
    Router.events.on("routeChangeStart", () => {
      setSelectedSubRegion(0);
      setLoader(true);
    });

    Router.events.on("routeChangeComplete", () => {
      setLoader(false);
    });
  }, []);


  const setRegion = (region) => {
    setSelectedSubRegion(0);
    setSelectedRegion(region);
  };

  const filterSubRegions = () => {
    if (selectedRegion.id === 0) {
      return categorySubRegions;
    }
    return categorySubRegions.filter(
      (subRegion) => subRegion.regionId === selectedRegion.id
    );
  };

  const filterTravels = () => {
    if (selectedRegion.id === 0 && selectedSubRegion === 0) {
      return categoryTravels;
    }
    if (selectedSubRegion !== 0) {
      return categoryTravels.filter(
        (travel) => travel.subRegionId === selectedSubRegion.id
      );
    }
    return categoryTravels.filter(
      (travel) => travel.regionId === selectedRegion.id
    );
  };

  // TODO alguma coisa mais automatizada? ss, o useRouter
  const pageName = () => {
    if (category.slug !== 'pacotes-de-viagem') return category.slug;
    return selectedRegion.name;
  }

  return (
    <Layout page={pageName()}>
      <Head>
        <title>{category.title} | Proa Viagens</title>
      </Head>

      <Hero>
      </Hero>

      <section className={styles.destinos__body} id="destinos_body">
        {isLoading ?
          <FullLoader />
          :
          <>
            <header className={[styles.select, styles.selectPrimary].join(' ')}>
              <div
                className={[utilStyles.container, styles.select__container].join(
                  ' '
                )}
              >
                <h2 className={styles.select__title}>Selecione a região</h2>
                <SelectOptions
                  primary
                  options={categoryRegions}
                  withExtra={allRegions}
                  selected={selectedRegion?.id}
                  handleClick={setRegion}
                />
              </div>
            </header>

            <div className={utilStyles.container}>
              <div className={styles.selectedGrid}>
                <aside
                  className={[styles.select, styles.selectSecondary].join(' ')}
                >
                  <h2 className={styles.select__title}>
                    Exibindo {selectedRegion?.name}
                  </h2>

                  <SelectOptions
                    secondary
                    options={filterSubRegions()}
                    selected={selectedSubRegion?.id}
                    handleClick={setSelectedSubRegion}
                  />
                </aside>

                <main className={styles.selecionado}>
                  <h2
                    className={[
                      styles.selecionado__title,
                      utilStyles.mbottom0,
                    ].join(' ')}
                  >
                    {selectedSubRegion?.name || selectedRegion?.name}
                  </h2>
                  <p className={styles.selecionado__subtitle}>
                    {selectedRegion?.description ||
                      selectedSubRegion?.description ||
                      'Consectetur adipisicing elit. Hic!'}
                  </p>
                  <BlocksGrid blocks={filterTravels()}
                    blockClick={() => document.querySelector('#destinos_body').scrollIntoView()} />
                </main>
              </div>
            </div>
          </>
        }
      </section>
    </Layout>
  );
}

export async function getStaticPaths() {
  const paths = categoriesData.map(({ slug }) => ({ params: { category: slug } }));

  return {
    paths,
    fallback: false,
  };
}

export async function getStaticProps({ params }) {
  const thisPageCategory = categoriesData.find((category) => category.slug === params.category);

  const categoryTravels = travelsData.filter((travel) => travel.categorySlug === thisPageCategory.slug);

  const categoryRegions = regionsData.filter((region) => {
    const foundTravelsInThisRegion = categoryTravels.filter((travel) => travel.regionId === region.id);
    region.travelsCount = foundTravelsInThisRegion.length;
    return region.travelsCount;
  });

  const categorySubRegions = subRegionsData.filter((subRegion) => {
    const foundTravelsInThisSubRegion = categoryTravels.filter((travel) => travel.subRegionId === subRegion.id);
    subRegion.travelsCount = foundTravelsInThisSubRegion.length;
    return subRegion.travelsCount;
  });

  return {
    props: {
      categoryTravels,
      categoryRegions,
      categorySubRegions,
      category: thisPageCategory
    },
  };
}
