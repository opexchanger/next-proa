import Head from 'next/head';

// components
import Layout from '../../components/Layout';
import DesktopNavigation from '../../components/DesktopNavigation';
import BlocksGrid from '../../components/BlocksGrid';
import SelectOptions from '../../components/SelectOptions';

// styles
import styles from './destinos.module.scss';
import utilStyles from '../../styles/utils.module.scss';

// data from cms
import travelsData from '../../data/travels.preval';
import regionsData from '../../data/regions.preval';
import subRegionsData from '../../data/subRegions.preval';

import { useSelection, allRegions } from '../../context/selectionContext';

export default function Destinos() {
  const {
    selectedRegion,
    setSelectedRegion,
    selectedSubRegion,
    setSelectedSubRegion,
  } = useSelection();

  const setRegion = (region) => {
    setSelectedSubRegion(0);
    setSelectedRegion(region);
  };

  const filterSubRegions = () => {
    if (selectedRegion.id === 0) {
      return subRegionsData;
    }
    return subRegionsData.filter(
      (subRegion) => subRegion.regionId === selectedRegion.id
    );
  };

  const filterTravels = () => {
    if (selectedRegion.id === 0 && selectedSubRegion === 0) {
      return travelsData;
    }
    if (selectedSubRegion !== 0) {
      return travelsData.filter(
        (travel) => travel.subRegionId === selectedSubRegion.id
      );
    }
    return travelsData.filter(
      (travel) => travel.regionId === selectedRegion.id
    );
  };

  return (
    <Layout page='destinos'>
      <Head>
        <title>Destinos | Proa Viagens</title>
      </Head>

      <section className={styles.destinos__header}>
        <DesktopNavigation page='destinos' />
        <div id='map'></div>
      </section>

      <section className={styles.destinos__body}>
        <header className={[styles.select, styles.selectPrimary].join(' ')}>
          <div
            className={[utilStyles.container, styles.select__container].join(
              ' '
            )}
          >
            <h2 className={styles.select__title}>Selecione a região</h2>
            <SelectOptions
              primary
              options={regionsData}
              withExtra={allRegions}
              selected={selectedRegion.id}
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
                Exibindo {selectedRegion.name}
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
                {selectedSubRegion?.name || selectedRegion.name}
              </h2>
              <p className={styles.selecionado__subtitle}>
                {selectedRegion.description ||
                  selectedSubRegion.description ||
                  'Consectetur adipisicing elit. Hic!'}
              </p>
              <BlocksGrid blocks={filterTravels()} />
            </main>
          </div>
        </div>
      </section>
    </Layout>
  );
}
