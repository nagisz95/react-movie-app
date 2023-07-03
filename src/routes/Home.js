import Movie from "../components/Movie";
import styles from "../css/Home.module.css";

function Home() {
  return (
    <main className={styles.main}>
      <header className={styles.header}>
        <h1 className={styles.greeting}>🍿BEST MOVIE!</h1>
      </header>
      <div className={styles.slideCenter}>
        <div className={styles.slideWrapper}>
          <Movie />
        </div>
      </div>
    </main>
  );
}

export default Home;
