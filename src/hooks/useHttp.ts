// Test -------------------------- Importing the Packages ---------------------------------
import { useState, useEffect } from "react";

// Test -------------------------- Importing the styles / other components ----------------

// Test -------------------------- Structure of Props ----------------------------------

// Test -------------------------- The current component ----------------------------------
const useHttp = (page: number) => {
  const [movieData, setMovieData] = useState<any[]>([]);

  useEffect(() => {
    const requestUrl = `https://api.themoviedb.org/3/trending/all/day?api_key=${process.env.REACT_APP_MOVIE_API_KEY}&page=${page}`;

    const movieRequest = async () => {
      const response = await fetch(requestUrl);
      const data = await response.json();
      setMovieData((previouState) => data.results);
    };

    movieRequest();
  }, [page]);

  return movieData;
};

// Test -------------------------- Exporting the current component ------------------------
export default useHttp;
