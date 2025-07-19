import styles from './Home.module.scss';

export default function Home() {
  return (
    <div className={styles.home}>
      <main className={styles.home__main}>
        <h1>Home page</h1>
      </main>
    </div>
  );
}
