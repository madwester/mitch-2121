import React from 'react';
import styled from "@emotion/styled";

const Items = [
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
    <Main>
      <Row>
        {Items.map(item => (
          <Item>
            <Icon className={item.iconClassName} />
            <ItemHeading>{item.heading}</ItemHeading>
            <ItemSubheading>{item.subheading}</ItemSubheading>
          </Item>
        ))}
      </Row>
    </Main>
  );
};

export default Events;

const Main = styled.div({
  background: "white",
  padding: "140px 0 80px"
});

const Row = styled.div({
  alignItems: "flex-start",
  display: "grid",
  gridGap: "48px",
  gridTemplateColumns: "repeat(auto-fit,minmax(256px,1fr))",
  margin: "0 auto",
  maxWidth: "1080px",
});

const Item = styled.div({
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

