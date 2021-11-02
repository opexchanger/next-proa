import { Button } from '../../../components/Buttons';
import { useModal } from '../../../context/modalContext';

import styles from './header.module.scss';
import utilStyles from '../../../styles/utils.module.scss';
import globalData from '../../../data/globalData.preval';

const getTileText = (tile) => {
  const words = tile.split(' ');
  const lastWord = words.pop();
  const gluedFirstLine = `<span>${words.join(' ')}</span> ${lastWord}`;
  return gluedFirstLine;
}

export default function Header({ tiles }) {
  const { setHomePageModal } = useModal();
  const { slogan, ctaButtonText } = globalData.pagesGeral;

  return (
    <div className={utilStyles.container}>
      <div className={styles.header__content}>
        <picture className={styles.header__logo}>
          <source srcSet="/img/logo-proa-small.webp" media="(max-width: 900px)" />
          <img srcSet="/img/logo-proa.webp" alt="Logo" />
        </picture>
        <h1 className={styles.header__title}>{slogan}</h1>
        <Button type='cta' onClick={() => setHomePageModal(true)} >
          {ctaButtonText}
        </Button>
      </div>
      <div className={styles.header__bottomline}>
        <div className={styles.container}>
          <div className={styles.header__tiles}>
            <div className={styles.header__tiles__tile}>
              <img
                src="img/icon-check.png"
                alt="Check"
                className={styles.header__tiles__icon}
              />
              <p dangerouslySetInnerHTML={{ __html: getTileText(tiles.tile_1) }}>
              </p>
            </div>
            <div className={styles.header__tiles__tile}>
              <img
                src="img/icon-check.png"
                alt="Check"
                className={styles.header__tiles__icon}
              />
              <p dangerouslySetInnerHTML={{ __html: getTileText(tiles.tile_2) }}>
              </p>
            </div>
            <div className={styles.header__tiles__tile}>
              <img
                src="img/icon-check.png"
                alt="Check"
                className={styles.header__tiles__icon}
              />
              <p dangerouslySetInnerHTML={{ __html: getTileText(tiles.tile_3) }}>
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}