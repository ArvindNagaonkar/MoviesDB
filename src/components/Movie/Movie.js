export function Movie({ posterPath, title, voteAverage }) {
  return (
    <div className="movie-container">
      <img
        className="movie-poster"
        src={posterPath}
        alt={title + " poster"}
      ></img>
      <div className="description">
        <p>{title}</p>
        <p>Rating: {voteAverage.toFixed(1)}</p>
      </div>
    </div>
  );
}
