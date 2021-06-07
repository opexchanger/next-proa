import { useEffect, useState } from 'react';

import Head from 'next/head';
import Link from 'next/link';

import Layout from '../../components/Layout';
import DesktopNavigation from '../../components/DesktopNavigation';
import BlocksGrid from '../../components/BlocksGrid';
import SelectOptions from '../../components/SelectOptions';

import styles from './destinos.module.scss';
import utilStyles from '../../styles/utils.module.scss';

import destinos from '../../data/destinos';
import regionsData from '../../data/regions';
import countriesData from '../../data/countries';

// fazer isso aqui dentro do getStaticProps
regionsData.unshift({
  id: 0,
  name: 'Todos',
  count: regionsData.reduce((sum, current) => sum + current.count, 0),
});

const filterOptions = (options, filter) => {
  if (filter === 0) {
    return options;
  }
  return options.filter((option) => option.regionId === filter);
};

export default function Destinos() {
  const [selectedRegion, setSelectedRegion] = useState(0);
  const [selectedCountry, setSelectedCountry] = useState(0);

  const setRegion = (region) => {
    // quando seleciona por região, desmarca os países
    setSelectedCountry(0);
    setSelectedRegion(region);
  };

  // filta as opções de destinos exibidas
  const filterDestinos = (destinos) => {
    // se não tem nenhum selecionado (ou ta no 'todos') retorna tudo
    if (selectedRegion === 0 && selectedCountry === 0) {
      return destinos;
    }
    // primeiro testa o país pq região tb continua selecionada ao msm tempo
    if (selectedCountry !== 0) {
      return destinos.filter((destino) => destino.countryId === selectedCountry);
    }
    // por último a região pq só vai filtrar por ela se não tiver nenhum país selecionado
    return destinos.filter((destino) => destino.regionId === selectedRegion);
  };

  return (
    <Layout page="destinos">
      <Head>
        <title>Destinos | Proa Viagens</title>
      </Head>

      <section className={styles.destinos__header}>
        <DesktopNavigation page="destinos" />
        <div id="map"></div>
      </section>

      <section className={styles.destinos__body}>
        <header className={[styles.select, styles.selectPrimary].join(' ')}>
          <div className={[utilStyles.container, styles.select__container].join(' ')}>
            <h2 className={styles.select__title}>Selecione a região</h2>
            <SelectOptions
              primary
              options={regionsData}
              selected={selectedRegion}
              handleClick={setRegion}
            />
          </div>
        </header>

        <div className={utilStyles.container}>
          <div className={styles.selectedGrid}>
            <aside className={[styles.select, styles.selectSecondary].join(' ')}>
              <h2 className={styles.select__title}>Região selecionada</h2>
              <SelectOptions
                secondary
                options={filterOptions(countriesData, selectedRegion)}
                selected={selectedCountry}
                handleClick={setSelectedCountry}
              />
            </aside>

            <main className={styles.selecionado}>
              <h2 className={[styles.selecionado__title, utilStyles.mbottom0].join(' ')}>
                Lugar selecionado
              </h2>
              <p className={styles.selecionado__subtitle}>
                Consectetur adipisicing elit. Hic!
              </p>
              <BlocksGrid blocks={filterDestinos(destinos)} />
            </main>
          </div>
        </div>
      </section>
    </Layout>
  );
}
