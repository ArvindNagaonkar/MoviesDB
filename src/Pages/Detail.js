import Heading from "../components/General/Heading";
import { BigMovieCard } from "../components/General/BigMovieCard";
import { CastCardsContainer } from "../components/Casts/CastCardsContainer";
import { CastCard } from "../components/Casts/CastCard";
import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";

export const testCast = [
  {
    adult: false,
    gender: 2,
    id: 10859,
    known_for_department: "Acting",
    name: "Ryan Reynolds",
    original_name: "Ryan Reynolds",
    popularity: 74.596,
    profile_path: "/2Orm6l3z3zukF1q0AgIOUqvwLeB.jpg",
    cast_id: 252,
    character: "Wade Wilson / Deadpool / Nicepool",
    credit_id: "66a0eeb7fadd7c4c9c38207f",
    order: 0,
  },
  {
    adult: false,
    gender: 2,
    id: 6968,
    known_for_department: "Acting",
    name: "Hugh Jackman",
    original_name: "Hugh Jackman",
    popularity: 54.698,
    profile_path: "/4Xujtewxqt6aU0Y81tsS9gkjizk.jpg",
    cast_id: 253,
    character: "Logan / Wolverine",
    credit_id: "66a0eef54192f70fea09dc90",
    order: 1,
  },
  {
    adult: false,
    gender: 3,
    id: 2324569,
    known_for_department: "Acting",
    name: "Emma Corrin",
    original_name: "Emma Corrin",
    popularity: 43.196,
    profile_path: "/wqGOVOsHzZaHeHymIS40elGCnY0.jpg",
    cast_id: 254,
    character: "Cassandra Nova",
    credit_id: "66a0ef1ca5ab9d9f3d705ed1",
    order: 2,
  },
  {
    adult: false,
    gender: 2,
    id: 15576,
    known_for_department: "Acting",
    name: "Matthew Macfadyen",
    original_name: "Matthew Macfadyen",
    popularity: 25.826,
    profile_path: "/2FF3Yjxd7DYR4EIJL6s2GpKDMkJ.jpg",
    cast_id: 256,
    character: "Mr. Paradox",
    credit_id: "66a0ef54aab1abca4f09e107",
    order: 3,
  },
  {
    adult: false,
    gender: 1,
    id: 1464650,
    known_for_department: "Acting",
    name: "Dafne Keen",
    original_name: "Dafne Keen",
    popularity: 40.324,
    profile_path: "/g325OIjIHrFr0te8ewPfhKQ2SKj.jpg",
    cast_id: 271,
    character: "Laura / X-23",
    credit_id: "66a0f13d76eb26a1ca381cc0",
    order: 4,
  },
  {
    adult: false,
    gender: 1,
    id: 1424650,
    known_for_department: "Acting",
    name: "Dafne Keen",
    original_name: "Dafne Keen",
    popularity: 40.324,
    profile_path: "/g325OIjIHrFr0te8ewPfhKQ2SKj.jpg",
    cast_id: 271,
    character: "Laura / X-23",
    credit_id: "66a0f13d76eb26a1ca381cc0",
    order: 4,
  },
];

const imgPath = "https://image.tmdb.org/t/p/w500";

export default function Detail() {
  const { id } = useParams();
  const movie_details_url = `https://api.themoviedb.org/3/movie/${id}?api_key=0782bbb191769d684ba4f83da14b9ef5&language=en-US`;
  const cast_details_url = `https://api.themoviedb.org/3/movie/${id}/credits?api_key=0782bbb191769d684ba4f83da14b9ef5&language=en-US`;

  const [movieDetails, setMovieDetails] = useState(null);
  const [castDetails, setCastDetails] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchMovieDetails = async () => {
      try {
        const response = await fetch(movie_details_url);
        if (!response.ok) {
          throw new Error("Network response was not ok");
        }
        const data = await response.json();
        setMovieDetails(data);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    const fetchCastDetails = async () => {
      try {
        const response = await fetch(cast_details_url);
        if (!response.ok) {
          throw new Error("Network response was not ok");
        }
        const data = await response.json();
        setCastDetails(data.cast); // Assuming `data.cast` contains the cast array
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    const fetchData = async () => {
      await Promise.all([fetchMovieDetails(), fetchCastDetails()]);
      setLoading(false);
    };

    fetchData();
  }, [movie_details_url, cast_details_url]);

  return (
    <>
      {loading ? (
        <Heading>Loading...</Heading>
      ) : (
        movieDetails &&
        castDetails && (
          <>
            <BigMovieCard
              posterPath={imgPath + movieDetails.poster_path}
              title={movieDetails.title}
              runtime={movieDetails.runtime}
              release_date={movieDetails.release_date}
              overview={movieDetails.overview}
              vote_average={movieDetails.vote_average}
              genreNames={movieDetails.genres
                ?.map((genre) => genre.name)
                .join(", ")}
              backdrop_path={imgPath + movieDetails.backdrop_path}
            />
            <Heading>Cast:</Heading>
            <CastCardsContainer>
              {castDetails.map((cast) => (
                <CastCard
                  key={cast.id}
                  profile={imgPath + cast.profile_path}
                  name={cast.name}
                  character={cast.character}
                />
              ))}
            </CastCardsContainer>
          </>
        )
      )}
    </>
  );
}
