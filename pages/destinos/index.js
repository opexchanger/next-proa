import Head from 'next/head';
import Link from 'next/link';

import Layout from '../../components/Layout';
import DesktopNavigation from '../../components/DesktopNavigation';

import styles from './destinos.module.scss';
import utilStyles from '../../styles/utils.module.scss';
import BlocksGrid from '../../components/BlocksGrid';

import blocks from '../../data/blocks';

export default function Destinos() {
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
        <header className={[styles.select, styles.selectPrincipal].join(' ')}>
          <div className={[utilStyles.container, styles.select__container].join(' ')}>
            <h2 className={styles.select__title}>Selecione a região</h2>
            <div className={styles.select__options}>
              <a href="#" className={[styles.select__link, styles.active].join(' ')}>
                All <span>15</span>
              </a>
              <a href="#" className={styles.select__link}>
                Europa <span>4</span>
              </a>
              <a href="#" className={styles.select__link}>
                América do Norte <span>3</span>
              </a>
              <a href="#" className={styles.select__link}>
                América do Sul <span>8</span>
              </a>
            </div>
          </div>
        </header>

        <div className={utilStyles.container}>
          <div className={styles.selectedGrid}>
            <aside className={[styles.select, styles.selectSecondary].join(' ')}>
              <h2 className={styles.select__title}>Região selecionada</h2>
              <ul className={styles.select__options}>
                <li className={styles.select__item}>
                  <a href="#" className={[styles.select__link, styles.active].join(' ')}>
                    France <span>4</span>
                  </a>
                </li>
                <li className={styles.select__item}>
                  <a href="#" className={styles.select__link}>
                    Spain <span>2</span>
                  </a>
                </li>

                <li className={styles.select__item}>
                  <a href="#" className={styles.select__link}>
                    Italy <span>3</span>
                  </a>
                </li>

                <li className={styles.select__item}>
                  <a href="#" className={styles.select__link}>
                    Switzerland <span>1</span>
                  </a>
                </li>

                <li className={styles.select__item}>
                  <a href="#" className={styles.select__link}>
                    Scotland <span>2</span>
                  </a>
                </li>
              </ul>
            </aside>

            <main className={styles.selecionado}>
              <h2 className={[styles.selecionado__title, utilStyles.mbottom0].join(' ')}>
                Lugar selecionado
              </h2>
              <p className={styles.selecionado__subtitle}>
                Consectetur adipisicing elit. Hic!
              </p>
              <BlocksGrid blocks={blocks} />
            </main>
          </div>
        </div>
      </section>
    </Layout>
  );
}
