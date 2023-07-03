import styles from "../css/Detail.module.css";

function Loading() {
  return (
    <h1 className={styles.loading}>
      <div className={styles.loadingContainer}>
        <div className={styles.L}>
          <p>L</p>
        </div>
        <div className={styles.O}>
          <p>O</p>
        </div>
        <div className={styles.A}>
          <p>A</p>
        </div>
        <div className={styles.D}>
          <p>D</p>
        </div>
        <div className={styles.I}>
          <p>I</p>
        </div>
        <div className={styles.N}>
          <p>N</p>
        </div>
        <div className={styles.G}>
          <p>G</p>
        </div>
      </div>
    </h1>
  );
}

export default Loading;
