import { Link } from "react-router-dom";
import styles from "../css/Home.module.css";

function Slide({ coverImg, title, id }) {
  return (
    <div className={styles.movieSlide}>
      <Link to={`/movie/${id}`}>
        <img className={styles.movieImg} src={coverImg} alt={title} />
      </Link>
      <h1 className={styles.movieTitle}>
        <Link className={styles.movieTitleLink} to={`/movie/${id}`}>
          {title}
        </Link>
      </h1>
    </div>
  );
}

export default Slide;
