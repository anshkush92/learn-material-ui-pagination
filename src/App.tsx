import { Grid, Pagination, Stack, Box, Typography } from "@mui/material";
import { useAppSelector, useAppDispatch } from "./app/hooks";
import MovieCard from "./components/MovieCard";
import { changePage } from "./utilities/pageChangeSlice";
import { useEffect, useState } from "react";

const App = () => {
  const page = useAppSelector((state) => state.pageChange.currentPage);
  const dispatch = useAppDispatch();

  const [movieData, setMovieData] = useState<any[]>([]);

  useEffect(() => {
    const requestUrl = `https://api.themoviedb.org/3/trending/all/day?api_key=${process.env.REACT_APP_MOVIE_API_KEY}&page=${page}`;

    const movieRequest = async () => {
      const response = await fetch(requestUrl);
      const data = await response.json();
      setMovieData((previouState) => data.results);
    };

    movieRequest();

    return () => {
      console.log("Cleanup from App.tsx");
    };
  }, [page]);

  console.log(movieData);

  const pageChangeHandler = (
    event: React.ChangeEvent<unknown>,
    value: number
  ) => {
    dispatch(changePage(value));
  };

  return (
    <Stack>
      <Grid container mt={2}>
        {movieData.map((movie) => (
          <MovieCard
            moviePosterLink={movie.backdrop_path}
            movieTitle={movie.name || movie.title}
          ></MovieCard>
        ))}
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
