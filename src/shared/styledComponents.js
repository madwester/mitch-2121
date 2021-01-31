import styled from "@emotion/styled";
import BREAKPOINTS from "./breakpoints";

export const Main = styled.div({
  margin: "0 auto",
  maxWidth: "1600px",
});

export const Row = styled.div({
  display: "flex",
  margin: "0 auto",
  maxWidth: "1080px",
  padding: "40px 0 0",
  width: "100%",
  justifyContent: "center",

  [`@media (max-width: ${BREAKPOINTS.small}px)`]: {
    padding: 0,
  },
});

export const Hero = styled.div(
  ({ height = "700px", image, position = "unset" }) => ({
    backgroundImage: `url('${image}')`,
    backgroundPosition: position,
    backgroundRepeat: "no-repeat",
    backgroundSize: "cover",
    height: height,
    borderRadius: "4px",

    [`@media (max-width: ${BREAKPOINTS.small}px)`]: {
      backgroundPosition: "right",
    },
  })
);

export const Heading = styled.h1({
  fontWeight: 700,
  margin: "60px 30px",
  fontSize: "50px",
});

export const Text = styled.p({
  margin: 0,
  lineHeight: 1.5,
});

export const Button = styled.button({
  border: 0,
  background: "#2d4d44",
  borderRadius: "2px",
  padding: "16px",
  fontSize: "16px",
  fontWeight: 800,
  letterSpacing: "1.1px",
  color: "white",
  cursor: "pointer",

  "&:hover": {
    "& > span": {
      background: "red",
      transform: "translateX(8px)",
      transition: "translate 0.2s",
    },
  },
});
