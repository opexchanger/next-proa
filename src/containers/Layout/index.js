import { DesktopNavigation, MobileNavigation } from '../../components/Navigation';

import styles from './layout.module.scss';
import Contact from '../../components/Contact';

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

      <footer className={styles.footer}></footer>
    </>
  );
}
