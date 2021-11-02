import { DesktopNavigation, MobileNavigation } from '../../components/Navigation';

import styles from './layout.module.scss';
import Contact from '../../components/Contact';
import Footer from '../../components/Footer';

export default function Layout({ children, page }) {
  return (
    <>
      <header className={styles.header}>
        <MobileNavigation page={page} />
        <DesktopNavigation page={page} />
      </header>

      <main>
        {children}
        <Contact />
      </main>

      <Footer />
    </>
  );
}
