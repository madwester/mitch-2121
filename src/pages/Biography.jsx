import React from 'react';
import styled from "@emotion/styled";
import Outside from '../images/outside.jpg';
import { Main, Heading, Text, Hero } from '../shared/styledComponents';

const Biography = () => (
  <Main>
    <Hero image={Outside}/>
    <Content>
      <Heading>Biography</Heading>
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

export default Biography;