import { useRouter } from 'next/router';
import { FaWhatsappSquare, FaInstagramSquare, FaFacebookSquare } from 'react-icons/fa';

import globalData from '../../data/globalData.preval';
import pagesList from '../../data/pagesList';
import getSelectRegion from '../../utils/getSelectRegion';

import styles from './footer.module.scss';
import utilStyles from '../../styles/utils.module.scss'

export default function Footer() {
  const router = useRouter();
  const bindToRegion = getSelectRegion();

  const handleClick = (e, url, changeRegion) => {
    e.preventDefault();
    router.push(url).then(changeRegion());
  }

  const {
    address,
    email,
    phones,
    whatsapp,
    instagram,
    facebook
  } = globalData.companyInfo;

  return (
    <footer className={styles.footer}>
      <div className={utilStyles.container}>
        <div className={styles.footer__wrapper}>

          <div className={styles.footer__redes}>
            <h3 className={styles.footer__title}>Redes</h3>
            <ul>
              <li className={styles.iconLink}>
                <a href={instagram ? instagram : '#'} rel="noreferrer" target="_blank">
                  <FaInstagramSquare size="2.2rem" />
                </a>
              </li>
              <li className={styles.iconLink}>
                <a href={whatsapp ? whatsapp : '#'} rel="noreferrer" target="_blank">
                  <FaWhatsappSquare size="2.2rem" />
                </a>
              </li>
              <li className={styles.iconLink}>
                <a href={facebook ? facebook : '#'} rel="noreferrer" target="_blank">
                  <FaFacebookSquare size="2.2rem" />
                </a>
              </li>
            </ul>
          </div>

          <div className={styles.footer__pages}>
            <h3 className={styles.footer__title}>Páginas</h3>
            <ul>
              <li>
                <a href='/contato' className={styles.footer__link}>Contato</a>
              </li>
            </ul>
          </div>

          <div className={styles.footer__viagens}>
            <h3 className={styles.footer__title}>Viagens</h3>
            <ul>
              {pagesList.filter(({ viagem }) => viagem).map(({ name, title, url, selectRegion }) => {
                const region = selectRegion ? selectRegion : 0;
                const changeRegionOnClick = bindToRegion(region);
                return (
                  <li key={name}>
                    <a className={styles.footer__link}
                      onClick={(e) => handleClick(e, url, changeRegionOnClick)}
                    >
                      {title}
                    </a>
                  </li>
                );
              })}
            </ul>
          </div>

          <div className={styles.footer__address}>
            <h3 className={styles.footer__title}>Contato</h3>
            <p className={styles.footer__text}>{email}</p>
          </div>
        </div>

        <div className={styles.footer__bottom}>
          <p className={styles.footer__copyright}>© COPYRIGHT 2021 Proa Viagens / CNPJ: 34.598.328/0001-73 / Endereço {address}</p>
        </div>
      </div>
    </footer>
  );
}
