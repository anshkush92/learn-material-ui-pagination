import "./App.css";
import MovieCard from "./components/movie-card/MovieCard";
import { Grid, Pagination, Stack, Box } from "@mui/material";

const App = () => {
  return (
    <Stack>
      <Grid container mt={2}>
        <MovieCard></MovieCard>
        <MovieCard></MovieCard>
        <MovieCard></MovieCard>
        <MovieCard></MovieCard>
        <MovieCard></MovieCard>
        <MovieCard></MovieCard>
        <MovieCard></MovieCard>
        <MovieCard></MovieCard>
        <MovieCard></MovieCard>
        <MovieCard></MovieCard>
        <MovieCard></MovieCard>
        <MovieCard></MovieCard>
        <MovieCard></MovieCard>
        <MovieCard></MovieCard>
        <MovieCard></MovieCard>
        <MovieCard></MovieCard>
        <MovieCard></MovieCard>
        <MovieCard></MovieCard>
      </Grid>
      <Box mb={2} display="flex" justifyContent="center">
        <Pagination count={8} showFirstButton showLastButton></Pagination>
      </Box>
    </Stack>
  );
};

export default App;
