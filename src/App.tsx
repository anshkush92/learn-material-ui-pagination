import { Grid, Stack, Box } from "@mui/material";
import { useAppSelector } from "./app/hooks";
import MovieCard from "./components/Movie/MovieCard";
import { useEffect, useState } from "react";
import Paginated from "./components/Pagination/Paginated";

const App = () => {
  const page = useAppSelector((state) => state.pageChange.currentPage);
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

  const movieDataComponent = movieData.map((movie) => (
    <MovieCard
      key={movie.backdrop_path}
      moviePosterLink={movie.backdrop_path}
      movieTitle={movie.name || movie.title}
    ></MovieCard>
  ));

  return (
    <Stack m={2}>
      <Grid container spacing={2}>
        {movieDataComponent}
      </Grid>
      <Box mb={1} mt={3} display="flex" justifyContent="center">
        <Paginated></Paginated>
      </Box>
    </Stack>
  );
};

export default App;
