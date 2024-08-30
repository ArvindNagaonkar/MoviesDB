import "../../CSS/BigMovieCard.css";

export function BigMovieCard({
  posterPath,
  title,
  runtime,
  vote_average,
  release_date,
  overview,
  genreNames,
  backdrop_path,
}) {
  return (
    <div className="movie-card">
      <div className="movie-detail-container">
        <div className="poster">
          <img src={posterPath} alt="sdaw" />
        </div>
        <div className="movie-detail">
          <h3>{title}</h3>
          <p className="rating">Rating: {vote_average}</p>
          <div className="duraion-genres">
            <span>{runtime} min</span>
            <p>{genreNames}</p>
          </div>
          <p className="releasedate">Release Date: {release_date}</p>
        </div>
        <div className="movie-overview">
          <h3>Overview</h3>
          <p>{overview}</p>
        </div>
      </div>
      <div className="backdropImg-Container">
        <img className="backdropImg" src={backdrop_path} alt="tand" />
      </div>
    </div>
  );
}
