import React from 'react';
import HeroImage from '../images/nz2.png';
import Image1 from '../images/wedding1.png';
import Image2 from '../images/beachroad.png';
import styled from "@emotion/styled";
import FONTS from '../shared/fonts';
import { Hero } from '../shared/styledComponents';
import { BREAKPOINT } from '../shared/breakpoint';
import { Button, Row, Main } from '../shared/styledComponents';

const Home = () => {
  return(
    <Main>
      <Hero image={HeroImage}/>
      <Row>
        <Item>
          <ItemImage image={Image1} />
          <ItemContent>
            <Heading>Lorem Ipsum is simply dummy text of the printing and</Heading>
            <Text>
              Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries.
            </Text>
            <Button>Biography ></Button>
          </ItemContent>
        </Item>
        
      </Row>
      <Row>
      <Item>
          <ItemContent>
            <Heading>Lorem Ipsum is simply dummy text of the printing and</Heading>
            <Text>
              Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries.
            </Text>
            <Button>Get in touch ></Button>
          </ItemContent>
          <ItemImage image={Image2} />
        </Item>
      </Row>
    </Main>
  );
};

const Item = styled.div({
  height: "600px",
  position: "relative",
  width: "100%",
  display: "flex",
  alignItems: "center"
});

const ItemImage = styled.div(({ image }) => ({
  height: "100%",
  width: "50%",
  backgroundImage: `url('${image}')`,
  backgroundPosition: "unset",
  backgroundRepeat: "no-repeat",
  backgroundSize: "cover",
}));

const ItemContent = styled.div({
  width: "50%",
  padding: "40px"
});

const Heading = styled.p({
  fontSize: "28px",
  fontWeight: 900,
  margin: "0 0 16px"
});

const Text = styled.p({
  lineHeight: 1.5,
  margin: "0 0 32px"
});

export default Home;