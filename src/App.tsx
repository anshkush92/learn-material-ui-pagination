import { Grid, Stack, Box } from "@mui/material";
import { useAppSelector } from "./app/hooks";
import MovieCard from "./components/Movie/MovieCard";
import Paginated from "./components/Pagination/Paginated";
import useHttp from "./hooks/useHttp";

const App = () => {
  const page = useAppSelector((state) => state.pageChange.currentPage);
  const movieData = useHttp(page);

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
