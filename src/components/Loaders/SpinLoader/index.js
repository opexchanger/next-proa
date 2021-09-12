import styles from './spin-loader.module.scss';

export default function SpinLoader() {
  return (
    <div className={styles.loader}><div></div><div></div><div></div></div>
  );
}
