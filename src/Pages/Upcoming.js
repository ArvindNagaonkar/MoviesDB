import { Movie } from "../components/Movie/Movie";
import { MovieContainer } from "../components/Movie/MovieContainer";
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";

const imgPath = "https://image.tmdb.org/t/p/w500";
const URL =
  "https://api.themoviedb.org/3/movie/upcoming?api_key=0782bbb191769d684ba4f83da14b9ef5&language=en-US&page=1";

export default function Upcoming() {
  const [movieData, setMovieData] = useState([]);
  useEffect(() => {
    fetch(URL)
      .then((response) => {
        if (!response.ok) {
          throw new Error("Network response was not ok");
        }
        return response.json();
      })
      .then((data) => setMovieData(data.results))
      .catch((error) => console.error("Error fetching data:", error));
  }, []);
  return (
    <main>
      <MovieContainer>
        {console.log(movieData)}
        {movieData.map((movie, i) => (
          <Link key={i} to={"/details/" + movie.id}>
            <Movie
              key={i}
              posterPath={imgPath + movie.poster_path}
              title={movie.title}
              voteAverage={movie.vote_average}
            />
          </Link>
        ))}
      </MovieContainer>
    </main>
  );
}
