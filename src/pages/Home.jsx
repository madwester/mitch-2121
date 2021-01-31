import React, { useEffect } from "react";
import HeroImage from "../images/nz2.png";
import Image1 from "../images/wedding1.png";
import Image2 from "../images/beachroad.png";
import styled from "@emotion/styled";
import { Hero } from "../shared/styledComponents";
import BREAKPOINTS from "../shared/breakpoints";
import { Button, Row, Main } from "../shared/styledComponents";
import Aos from "aos";
import "aos/dist/aos.css";
import { HeaderHeight } from "../shared/constants";

const Home = () => {
  useEffect(() => {
    Aos.init({ duration: 2000 });
  }, []);

  return (
    <Main>
      <ModifiedHero image={HeroImage} />
      <ModifiedRow reverse>
        <ItemImage image={Image1} />
        <ItemContent>
          <Heading>
            Lorem Ipsum is simply dummy text of the printing and
          </Heading>
          <Text>
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industry's standard dummy text
            ever since the 1500s, when an unknown printer took a galley of type
            and scrambled it to make a type specimen book. It has survived not
            only five centuries.
          </Text>
          <Button>
            Events & Wedding <span>></span>
          </Button>
        </ItemContent>
      </ModifiedRow>
      <ModifiedRow>
        <ItemContent>
          <Heading>
            Lorem Ipsum is simply dummy text of the printing and
          </Heading>
          <Text>
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industry's standard dummy text
            ever since the 1500s, when an unknown printer took a galley of type
            and scrambled it to make a type specimen book. It has survived not
            only five centuries.
          </Text>
          <Button>
            Get in touch <span>></span>
          </Button>
        </ItemContent>
        <ItemImage image={Image2} />
      </ModifiedRow>
    </Main>
  );
};

const ModifiedRow = styled(Row)(({ reverse }) => ({
  height: "600px",
  alignItems: "center",

  [`@media (max-width: ${BREAKPOINTS.small}px)`]: {
    flexDirection: reverse ? "column-reverse" : "column",
    height: "auto",
    padding: "0 24px",
  },
}));

const ItemImage = styled.div(({ image }) => ({
  height: "100%",
  width: "50%",
  backgroundImage: `url('${image}')`,
  backgroundPosition: "unset",
  backgroundRepeat: "no-repeat",
  backgroundSize: "cover",

  [`@media (max-width: ${BREAKPOINTS.small}px)`]: {
    height: "400px",
    width: "100%",
  },
}));

const ItemContent = styled.div({
  width: "50%",
  padding: "40px",

  [`@media (max-width: ${BREAKPOINTS.small}px)`]: {
    padding: "32px 0",
    width: "100%",
  },
});

const ModifiedHero = styled(Hero)({
  [`@media (max-width: ${BREAKPOINTS.small}px)`]: {
    backgroundPosition: "68%",
    marginTop: -HeaderHeight,
  },
});

const Heading = styled.p({
  fontSize: "28px",
  fontWeight: 900,
  margin: "0 0 16px",
});

const Text = styled.p({
  lineHeight: 1.5,
  margin: "0 0 32px",
});

export default Home;
