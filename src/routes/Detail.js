import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

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
    <div>
      {loading ? (
        <h1>Loading...</h1>
      ) : (
        <>
          <img src={movie.large_cover_image} alt="1" />
          <h1>
            {movie.title} ({movie.year})
          </h1>
          <p>{movie.description_full}</p>
          <ul>{movie.genres && movie.genres.map((g) => <li key={g}>{g}</li>)}</ul>
        </>
      )}
    </div>
  );
}

export default Detail;
