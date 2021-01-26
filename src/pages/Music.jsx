import React from 'react';
import styled from "@emotion/styled";
import Hero from '../components/Hero';
import image from '../images/sitting.jpg';

const Music = () => {
  return(
    <Main>
      <Hero image={image} />
      <Paragraph>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quod dolores necessitatibus eos earum temporibus est neque facere eligendi delectus consectetur? Illum ad eligendi ut placeat repellat, dignissimos quaerat eveniet. Earum?</Paragraph>
      <VideoWrapper>
      <iframe
        height="600px"
        width="100%"
        maxWidth="1065px"
        src="https://www.youtube.com/embed/hRuw18AaXV4"
        frameborder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        allowfullscreen
      />
      </VideoWrapper>
    </Main>
  );
};

export default Music;

const Main = styled.div({
  background: "white",
});

const VideoWrapper = styled.div({
  width: "80%",
  margin: "40px auto"
})

const Paragraph = styled.p({
  lineHeight: 1.5,
  fontSize: "18px",
  padding: "0 40px"
});