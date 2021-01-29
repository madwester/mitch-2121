import React from 'react';
import HeroImage from '../images/nz2.png';
import Image1 from '../images/wedding1.png';
import Image2 from '../images/beachroad.png';
import styled from "@emotion/styled";
import FONTS from '../shared/fonts';
import { Hero } from '../shared/styledComponents';
import { BREAKPOINT } from '../shared/breakpoint';
import { Button, Row, Main } from '../shared/styledComponents';

const Home2 = () => {
  return(
    <Container>
      <ItemImage image={Image1} />
      <Item>
        <ItemContent>
          <Heading>Lorem Ipsum is simply dummy text of the printing and</Heading>
          <Text>
            Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries.
          </Text>
          <Button>Get in touch ></Button>
        </ItemContent>
        
      </Item>
    </Container>
  );
};

const Container = styled.div({
  display: "flex",
  padding: "20px 40px 40px",
  height: "1000px",
  width: "100%",
  color: "white"
})

const Item = styled.div({
  height: "600px",
  position: "relative",
  width: "100%",
  display: "flex",
  alignItems: "center",
  width: "50%"
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
  padding: "40px"
});

const Heading = styled.p({
  fontSize: "60px",
  fontWeight: 900,
  margin: "0 0 16px"
});

const Text = styled.p({
  fontSize: "32px",
  lineHeight: 1.5,
  margin: "0 0 32px"
});

export default Home2;