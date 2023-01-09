import PropTypes from "prop-types";

const Movie = ({ poster_path, title, release_date, overview }) => {
  return (
    <div>
      <img src={"https://image.tmdb.org/t/p/w200" + poster_path} alt={title} />
      <h2>{title}</h2>
      <p>{release_date}</p>
      <p>{overview}</p>
    </div>
  );
};
Movie.propTypes = {
  poster_path: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  release_date: PropTypes.string.isRequired,
  overview: PropTypes.string.isRequired,
};

export default Movie;
