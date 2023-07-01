import PropTypes from "prop-types";
import { Link } from "react-router-dom";

function Movie({ id, coverImg, title, synopsis, genres }) {
  return (
    <div>
      <img src={coverImg} alt={title} />
      <h1>
        <Link to={`/movie/${id}`}>{title}</Link>
      </h1>
      <p>{synopsis.length > 235 ? `${synopsis.slice(0, 235)}...` : synopsis}</p>
      <ul>
        {genres.map((g) => (
          <li key={g}>{g}</li>
        ))}
      </ul>
    </div>
  );
}

Movie.protoTypes = {
  id: PropTypes.number.isRequired,
  coverImg: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  synopsis: PropTypes.string.isRequired,
  genres: PropTypes.arrayOf(PropTypes.string).isRequired,
};

export default Movie;
