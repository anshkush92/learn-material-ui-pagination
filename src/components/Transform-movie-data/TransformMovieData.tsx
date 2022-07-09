// Test -------------------------- Importing the Packages ---------------------------------
import React from "react";

// Test -------------------------- Importing the styles / other components ----------------
import MovieCard from "../Movie/MovieCard";
import { useAppSelector } from "../../app/hooks";
import useHttp from "../../hooks/useHttp";

// Test -------------------------- The current component ----------------------------------
const TransformMovieData = () => {
  const page = useAppSelector((state) => state.pageChange.currentPage);
  const movieData = useHttp(page);

  const movieDataComponent = movieData.map((movie) => (
    <MovieCard
      key={movie.backdrop_path}
      moviePosterLink={movie.backdrop_path}
      movieTitle={movie.name || movie.title}
    ></MovieCard>
  ));

  return <>{movieDataComponent}</>;
};

// Test -------------------------- Exporting the current component ------------------------
export default TransformMovieData;
