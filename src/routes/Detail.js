import { useEffect, useState } from "react";
import { useParams, Link } from "react-router-dom";
import styles from "../css/Detail.module.css";
import Loading from "../components/Loading";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowLeft } from "@fortawesome/free-solid-svg-icons";

function Detail() {
  const [loading, setLoading] = useState(true);
  const [movie, setMovie] = useState([]);
  const { id } = useParams();
  const getMovie = async () => {
    const json = await (await fetch(`https://yts.mx/api/v2/movie_details.json?movie_id=${id}`)).json();
    setMovie(json.data.movie);
    setLoading(false);
  };
  useEffect(() => {
    getMovie();
  }, []);
  return (
    <div className={styles.detailWrapper}>
      <Link to={"/"}>
        <FontAwesomeIcon className={styles.backwardArrow} icon={faArrowLeft} />
      </Link>
      {loading ? (
        <Loading />
      ) : (
        <div className={styles.detailCard}>
          <div className={styles.detailImgWrapper}>
            <img className={styles.detailImg} src={movie.large_cover_image} alt="1" />
          </div>
          <div className={styles.detailInfo}>
            <h1 className={styles.detailTitle}>
              {movie.title} ({movie.year})
            </h1>
            <p className={styles.detailDes}>{movie.description_full.length > 250 ? `${movie.description_full.slice(0, 250)}...` : movie.description_full}</p>
            <ul className={styles.detailTagUl}>
              {movie.genres &&
                movie.genres.map((g) => (
                  <li className={styles.detailTag} key={g}>
                    {g}
                  </li>
                ))}
            </ul>
          </div>
        </div>
      )}
    </div>
  );
}

export default Detail;
