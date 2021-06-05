import Button from '../../Button';
import DesktopNavigation from '../../DesktopNavigation';

import styles from './hero.module.scss';
import utilStyles from '../../../styles/utils.module.scss';

export default function Hero() {
  return (
    <section className={styles.hero}>
      <DesktopNavigation page="home" />
      <div className={utilStyles.container}>
        <div className={styles.hero__content}>
          <picture className={styles.hero__logo}>
            <source srcSet="/img/logo-proa-small.webp" media="(max-width: 900px)" />
            <img srcSet="/img/logo-proa.webp" alt="Logo" />
          </picture>
          <h1 className={styles.hero__title}>A frase chamativa da Proa Viagens</h1>
          <Button to="/" cta>
            Agende agora
          </Button>
        </div>
        <div className={styles.hero__bottomline}>
          <div className={styles.container}>
            <div className={styles.hero__tiles}>
              <div className={styles.hero__tiles__tile}>
                <img
                  src="img/icon-check.png"
                  alt="Check"
                  className={styles.hero__tiles__icon}
                />
                <p>
                  <span>O melhor preço de </span>Passagens
                </p>
              </div>
              <div className={styles.hero__tiles__tile}>
                <img
                  src="img/icon-check.png"
                  alt="Check"
                  className={styles.hero__tiles__icon}
                />
                <p>
                  <span>Sem estresse com </span>Bagagem
                </p>
              </div>
              <div className={styles.hero__tiles__tile}>
                <img
                  src="img/icon-check.png"
                  alt="Check"
                  className={styles.hero__tiles__icon}
                />
                <p>
                  <span>O melhor preço de </span>Hospedagens
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
