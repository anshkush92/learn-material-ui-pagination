import styled from "@emotion/styled";
import { Card } from "@mui/material";

export const StyledCard = styled(Card)({
  maxWidth: "300px",
  height: "300px",
  backgroundColor: "#dbdbdb",
  display: "flex",
  flexDirection: "column",
  justifyContent: "center",
  alignItems: "center",
  margin: 4,
  translate: "transform 1 ease",
  "&:hover": {
    transform: "scale(1.1)",
  },
});
