// Test -------------------------- Importing the Packages ---------------------------------
import { Card, CardContent, CardMedia, Typography, Grid } from "@mui/material";
import { useEffect } from "react";

import { useTheme } from "@mui/material/styles";
import useMediaQuery from "@mui/material/useMediaQuery";

// Test -------------------------- Importing the styles / other components ----------------
import { useAppSelector, useAppDispatch } from "../../app/hooks";
import { gtXS, gtSM, gtMD } from "../../features/currentWidthSlice";

// Test -------------------------- Structure of Props ----------------------------------

// Test -------------------------- The current component ----------------------------------
const MovieCard = () => {
  const greaterThanXS = useAppSelector((state) => state.currentWidth.XS);
  const greaterThanSM = useAppSelector((state) => state.currentWidth.SM);
  const greaterThanMD = useAppSelector((state) => state.currentWidth.MD);

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

  console.log(greaterThanXS, greaterThanSM, greaterThanMD);
  console.log(headingVariant);

  return (
    <Grid item xs={6} sm={3} lg={2}>
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
          <Typography variant={headingVariant} align="left">
            Thor Love and Thunder
          </Typography>
        </CardContent>
      </Card>
    </Grid>
  );
};

// Test -------------------------- Exporting the current component ------------------------
export default MovieCard;
