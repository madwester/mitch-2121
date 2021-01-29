import React from 'react';
import styled from "@emotion/styled";
import Sitting from '../images/sitting.jpg';
import { Heading, Text, Hero, Main } from '../shared/styledComponents';

const Contact = () => (
  <Main>
    <Hero image={Sitting} position="center" />
    <Content>
      <Heading>Wanna get in touch?</Heading>
      <Text>Lorem ipsum dolor sit amet consectetur adipisicing elit. Dicta possimus nobis beatae fugiat omnis! Necessitatibus dolorum totam perspiciatis et doloribus odio corporis, eius exercitationem consequatur eum numquam facere, inventore ab! Lorem ipsum dolor sit amet consectetur adipisicing elit. Dicta possimus nobis beatae fugiat omnis! Necessitatibus dolorum totam perspiciatis et doloribus odio corporis, eius exercitationem consequatur eum numquam facere, inventore ab! 
      <br /><br />
      Possimus nobis beatae fugiat omnis! Necessitatibus dolorum totam perspiciatis et doloribus odio corporis, eius exercitationem consequatur eum numquam facere, inventore ab!
      <br /><br />
      Dicta possimus nobis beatae fugiat omnis! Necessitatibus dolorum totam perspiciatis et doloribus odio corporis, eius exercitationem consequatur eum numquam facere, inventore ab! 
      </Text>
    </Content>
  </Main>
);

export const Content = styled.div({
  margin: "40px auto 0",
  textAlign: "center",
  width: "70%"
});

export default Contact;