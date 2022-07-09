import MovieCard from "./components/MovieCard";
import { Grid, Pagination, Stack, Box, Typography } from "@mui/material";
import { useAppSelector, useAppDispatch } from "./app/hooks";
import { changePage } from "./utilities/pageChangeSlice";

const App = () => {
  const page = useAppSelector((state) => state.pageChange.currentPage);
  const dispatch = useAppDispatch();

  const pageChangeHandler = (
    event: React.ChangeEvent<unknown>,
    value: number
  ) => {
    dispatch(changePage(value));
  };

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
        <Typography variant="h5">{page}</Typography>
        <Pagination
          page={page}
          onChange={pageChangeHandler}
          count={100}
          boundaryCount={2}
          showFirstButton
          showLastButton
        ></Pagination>
      </Box>
    </Stack>
  );
};

export default App;
