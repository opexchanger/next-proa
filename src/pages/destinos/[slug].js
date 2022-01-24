import Head from 'next/head';
import { useEffect } from 'react';

// components
import Layout from '../../containers/Layout';
import Hero from '../../components/Hero';
import BlocksGrid from '../../components/BlocksGrid';
import SelectOptions from '../../components/SelectOptions';
import FullLoader from '../../components/Loaders/FullLoader';

//helpers
import { handleCategory, handleCustomRegion } from '../../utils/destinoDataHandlers';
import useSelectionMethods from '../../utils/hooks/useSelectionMethods';
import useChangingRoutesLoader from '../../utils/hooks/useChangingRoutesLoader';

// data from cms
import categoriesData from '../../data/categories.preval';
import customRegionsData from '../../data/customRegions.preval';

// styles
import styles from './destinos.module.scss';
import utilStyles from '../../styles/utils.module.scss';

export default function Destinos({ category, travels, countries, states, cities }) {
  const { resetSubRegions, selectedCountry, setSelectedCountry, selectedState, setSelectedState,
    filterStates, selectedCity, setSelectedCity, filterCities, filterTravels }
    = useSelectionMethods();

  const [isLoading, setLoader] = useChangingRoutesLoader({ onChangeStart: resetSubRegions });

  useEffect(() => {
    if (!selectedCountry) {
      setSelectedCountry(countries[0]);
    }
  }, [selectedCountry]);

  return (
    // TODO automatizar o pageName ?
    <Layout page={category.title}>
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
                  options={countries}
                  selected={selectedCountry?.id}
                  handleClick={setSelectedCountry}
                />
              </div>
            </header>

            <div className={utilStyles.container}>
              <div className={styles.selectedGrid}>
                <aside
                  className={[styles.select, styles.selectSecondary].join(' ')}
                >
                  <h2 className={styles.select__title}>
                    Exibindo {selectedCountry?.title}
                  </h2>

                  <SelectOptions
                    secondary
                    options={filterStates(states)}
                    selected={selectedState?.id}
                    handleClick={setSelectedState}
                  />
                </aside>

                <main className={styles.selecionado}>
                  <h2
                    className={[
                      styles.selecionado__title,
                      utilStyles.mbottom0,
                    ].join(' ')}
                  >
                    {selectedState?.title || selectedCountry?.title}
                  </h2>
                  <p className={styles.selecionado__subtitle}>
                    {selectedCountry?.description ||
                      selectedState?.description ||
                      'Consectetur adipisicing elit. Hic!'}
                  </p>
                  <BlocksGrid blocks={filterTravels(travels)}
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
  const categoryPaths = categoriesData.map(({ slug }) => ({ params: { slug } }));
  const customRegionPaths = customRegionsData.map(({ slug }) => ({ params: { slug } }));

  const paths = [...categoryPaths, ...customRegionPaths];

  return {
    paths,
    fallback: false,
  };
}

export async function getStaticProps({ params }) {
  let category, travels, countries, states, cities;
  // determinar se o slug pertence à uma categoria ou customRegion
  const currentCategory = categoriesData.find((category) => category.slug === params.slug);
  if (currentCategory) {
    ({ category, travels, countries, states, cities } = handleCategory(currentCategory));
  } else {
    const currentCustomRegion = customRegionsData.find((customRegion) => customRegion.slug === params.slug);
    ({ category, travels, countries, states, cities } = await handleCustomRegion(currentCustomRegion));
  }

  return {
    props: {
      category,
      travels,
      countries,
      states,
      cities
    },
  };
}
