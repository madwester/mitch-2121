import React from 'react';
import styled from "@emotion/styled";
import WeddingPhoto from '../images/wedding1.png';
import { Heading, Text, Row } from '../shared/styledComponents';

const FeatureItems = [
  {
    heading: "Acoustic",
    subheading: "Lorem ipsum dolor, sit amet consectetur",
    iconClassName: "fas fa-guitar"
  },
  {
    heading: "Acoustic with band",
    subheading: "Maiores eos recusandae praesentium corporis officia quibusdam",
    iconClassName: "fas fa-music"
  },
  {
    heading: "Acoustic & DJ",
    subheading: "Perspiciatis maiores voluptate fugiat eligendi consequuntur quia odit ea tempora.",
    iconClassName: "fas fa-icons"
  }
]

const Events = () => {
  return(
    <Container>
      <Row>
        <Content>
          <Heading>Wedding, party or corporate event?</Heading>
          <Text>
            Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries.
          </Text>
        </Content>
      </Row>
      
      <FeatureRow>
        {FeatureItems.map(item => (
          <FeatureItem>
            <Icon className={item.iconClassName} />
            <ItemHeading>{item.heading}</ItemHeading>
            <ItemSubheading>{item.subheading}</ItemSubheading>
          </FeatureItem>
        ))}
      </FeatureRow>
    </Container>
  );
};

export default Events;

const Container = styled.div({
  padding: "40px 0 0"
});

const FeatureRow = styled.div({
  alignItems: "flex-start",
  display: "grid",
  gridGap: "48px",
  gridTemplateColumns: "repeat(auto-fit,minmax(256px,1fr))",
  margin: "0 auto",
  maxWidth: "1080px",
});

const Content = styled.div({
  marginBottom: "80px",
  textAlign: "center"
});

const FeatureItem = styled.div({
  backgroundColor: "#f8f7fc",
  borderRadius: "8px",
  padding: "32px"
});

const Icon = styled.i({
  fontSize: "26px",
  margin: "0 0 16px"
})

const ItemHeading = styled.p({
  fontSize: "22px",
  fontWeight: 900,
  lineHeight: "1.5",
  margin: "0 0 16px"
});

const ItemSubheading = styled.p({
  fontSize: "18px",
  fontWeight: 400,
  lineHeight: "1.5",
  margin: "0"
});

