// Test -------------------------- Importing the Packages ---------------------------------
import { CardContent, CardMedia, Typography, Grid } from "@mui/material";
import { useEffect } from "react";

import { useTheme } from "@mui/material/styles";
import useMediaQuery from "@mui/material/useMediaQuery";

// Test -------------------------- Importing the styles / other components ----------------
import { useAppSelector, useAppDispatch } from "../app/hooks";
import { gtXS, gtSM, gtMD } from "../utilities/currentWidthSlice";
import { StyledCard } from "./StyledCard";

// Test -------------------------- Structure of Props ----------------------------------
import { MovieCardProps } from './MovieCard.type';

// Test -------------------------- The current component ----------------------------------
const MovieCard = ({ moviePosterLink, movieTitle }: MovieCardProps) => {
  const greaterThanXS = useAppSelector((state) => state.currentWidth.XS);
  const greaterThanSM = useAppSelector((state) => state.currentWidth.SM);

  const dispatch = useAppDispatch();

  const theme = useTheme();
  // False ---> Greater than SM , True ----> Less than SM
  const lessThanSM = useMediaQuery(theme.breakpoints.down("sm"));
  // False ---> Greater than MD, True ----> Lesser than MD
  const lessThanMD = useMediaQuery(theme.breakpoints.down("md"));

  useEffect(() => {
    if (lessThanSM) {
      dispatch(gtXS(true));
    } else if (!lessThanMD) {
      dispatch(gtMD(true));
    } else if (!lessThanSM) {
      if (lessThanMD) {
        dispatch(gtSM(true));
      }
    }
    return () => {
      console.log("Cleanup Function from MovieCard.tsx");
    };
  }, [dispatch, lessThanSM, lessThanMD]);

  const headingVariant = greaterThanXS
    ? "subtitle2"
    : greaterThanSM
    ? "subtitle1"
    : "body1";

  return (
    <Grid item xs={6} sm={3} lg={2}>
      <StyledCard>
        <CardMedia
          component="img"
          src={`https://image.tmdb.org/t/p/w500${
            moviePosterLink || "/p1F51Lvj3sMopG948F5HsBbl43C.jpg"
          }`}
          alt="Thor"
          sx={{ height: "100%" }}
          loading="lazy"
        ></CardMedia>

        <CardContent>
          <Typography variant={headingVariant} align="left">
            {movieTitle || "Thor Love and Thunder"}
          </Typography>
        </CardContent>
      </StyledCard>
    </Grid>
  );
};

// Test -------------------------- Exporting the current component ------------------------
export default MovieCard;
