// Test -------------------------- Importing the Packages ---------------------------------
import { Card, CardContent, CardMedia, Typography, Grid } from "@mui/material";

// Test -------------------------- Importing the styles / other components ----------------

// Test -------------------------- Structure of Props ----------------------------------

// Test -------------------------- The current component ----------------------------------
const MovieCard = () => {
  return (
    <Grid item xs={2}>
      <Card
        sx={{
          maxWidth: "300px",
          height: "300px",
          backgroundColor: "#dbdbdb",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
          m: 2,
        }}
      >
        <CardMedia
          component="img"
          src="https://image.tmdb.org/t/p/w500/p1F51Lvj3sMopG948F5HsBbl43C.jpg"
          alt="Thor"
          loading="lazy"
          sx={{ height: "100%" }}
        ></CardMedia>
        <CardContent>
          <Typography variant="h6">Thor Love and Thunder</Typography>
        </CardContent>
      </Card>
    </Grid>
  );
};

// Test -------------------------- Exporting the current component ------------------------
export default MovieCard;
