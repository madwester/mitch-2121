import React from 'react';
import HeroImage from '../images/nz2.png';
import ImageSitting from '../images/sitting.jpg';
import styled from "@emotion/styled";
import Hero from '../components/Hero';
import FONTS from '../shared/fonts';

const Home = () => {
  return(
    <Container>
      <Hero image={HeroImage}/>
      <Row>
        <Content>
          <Heading>Lorem Ipsum is simply dummy text of the printing and</Heading>
          <Text>
          Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries.
          </Text>
          <ContactButton>Get in touch!</ContactButton>
        </Content>
        <Image src={ImageSitting} image={ImageSitting} />
      </Row>
      <Row>
        <iframe
          height="600px"
          width="100%"
          maxWidth="1065px"
          src="https://www.youtube.com/embed/hRuw18AaXV4"
          frameborder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowfullscreen
        />
      </Row>
    </Container>
  );
};

const Container = styled.div({
  
});

const Content = styled.div({
  width: "50%",
})

const Row = styled.div({
  alignItems: "center",
  display: "flex",
  margin: "0 auto",
  maxWidth: "1080px",
  padding: "80px 32px",
});

const Image = styled.img(({ image }) => ({
  marginLeft: "32px",
  width: "50%",
}));

const Heading = styled.p({
  fontSize: "28px",
  fontWeight: 900,
  margin: "0 0 16px"
});

const Text = styled.p({
  fontFamily: FONTS.mandrope,
  lineHeight: 1.5,
  margin: "0 0 32px"
});

const ContactButton = styled.button({
  border: "1px solid black",
  background: "white",
  borderRadius: "2px",
  padding: "8px",
  fontsize: "20px",
  fontWeight: 800,
  letterSpacing: "1.2px",
  width: "150px"
});

export default Home;