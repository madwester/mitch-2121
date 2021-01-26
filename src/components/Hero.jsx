import React from 'react';
import styled from "@emotion/styled";
import { BREAKPOINT } from '../shared/breakpoint';

const Hero = ({ image }) => {
  return(
    <HeroContainer image={image} />
  );
};

export default Hero;

const HeroContainer = styled.div(({ image }) => ({
  backgroundImage: `url('${image}')`,
  backgroundPosition: "unset",
  backgroundRepeat: "no-repeat",
  backgroundSize: "cover",
  width: "100%",
  height: "700px",

  [`@media (max-width: ${BREAKPOINT.small}px)`]: {
    backgroundPosition: "right"
  }
}));
