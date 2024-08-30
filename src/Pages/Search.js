import { Movie } from "../components/Movie/Movie";
import { MovieContainer } from "../components/Movie/MovieContainer";
import { useState, useEffect } from "react";
import { Link, useParams } from "react-router-dom";

const imgPath = "https://image.tmdb.org/t/p/w500";

export default function Search() {
  const [searchData, setSearchData] = useState([]);
  const { movie_name } = useParams();

  useEffect(() => {
    if (movie_name) {
      const URL = `https://api.themoviedb.org/3/search/movie?api_key=0782bbb191769d684ba4f83da14b9ef5&language=en-US&query=${movie_name}&page=1`;

      fetch(URL)
        .then((response) => {
          if (!response.ok) {
            throw new Error("Network response was not ok");
          }
          return response.json();
        })
        .then((data) => setSearchData(data.results))
        .catch((error) => console.error("Error fetching data:", error));
    }
  }, [movie_name]);

  return (
    <main>
      <MovieContainer>
        {searchData.map((movie, i) => (
          <Link key={i} to={`/details/${movie.id}`}>
            <Movie
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
