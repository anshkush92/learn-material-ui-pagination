import { Grid, Stack, Box } from "@mui/material";
import Paginated from "./components/Pagination/Paginated";
import TransformMovieData from "./components/Transform-movie-data/TransformMovieData";

const App = () => {
  return (
    <Stack m={2}>
      <Grid container spacing={2}>
        <TransformMovieData></TransformMovieData>
      </Grid>
      <Box mb={1} mt={3} display="flex" justifyContent="center">
        <Paginated></Paginated>
      </Box>
    </Stack>
  );
};

export default App;
