import { useState } from 'react';

import Head from 'next/head';
import Link from 'next/link';

import Layout from '../../components/Layout';
import DesktopNavigation from '../../components/DesktopNavigation';
import BlocksGrid from '../../components/BlocksGrid';
import SelectOptions from '../../components/SelectOptions';

import styles from './destinos.module.scss';
import utilStyles from '../../styles/utils.module.scss';

import destinosData from '../../data/destinos';
import regionsData from '../../data/regions';
import countriesData from '../../data/countries';

// fazer isso aqui dentro do getStaticProps
regionsData.unshift({
  id: 0,
  name: 'Todas',
  count: regionsData.reduce((sum, current) => sum + current.count, 0),
});

export default function Destinos() {
  const [selectedRegion, setSelectedRegion] = useState(regionsData[0]);
  const [selectedCountry, setSelectedCountry] = useState(0);

  const setRegion = (region) => {
    setSelectedCountry(0);
    setSelectedRegion(region);
  };

  const filterCountries = () => {
    if (selectedRegion.id === 0) {
      return countriesData;
    }
    return countriesData.filter((country) => country.regionId === selectedRegion.id);
  };

  const filterDestinos = () => {
    if (selectedRegion.id === 0 && selectedCountry === 0) {
      return destinosData;
    }
    if (selectedCountry !== 0) {
      return destinosData.filter((destino) => destino.countryId === selectedCountry.id);
    }
    return destinosData.filter((destino) => destino.regionId === selectedRegion.id);
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
              selected={selectedRegion.id}
              handleClick={setRegion}
            />
          </div>
        </header>

        <div className={utilStyles.container}>
          <div className={styles.selectedGrid}>
            <aside className={[styles.select, styles.selectSecondary].join(' ')}>
              <h2 className={styles.select__title}>Exibindo {selectedRegion.name}</h2>
              <SelectOptions
                secondary
                options={filterCountries()}
                selected={selectedCountry.id}
                handleClick={setSelectedCountry}
              />
            </aside>

            <main className={styles.selecionado}>
              <h2 className={[styles.selecionado__title, utilStyles.mbottom0].join(' ')}>
                {selectedCountry.name || selectedRegion.name}
              </h2>
              <p className={styles.selecionado__subtitle}>
                Consectetur adipisicing elit. Hic!
              </p>
              <BlocksGrid blocks={filterDestinos()} />
            </main>
          </div>
        </div>
      </section>
    </Layout>
  );
}
