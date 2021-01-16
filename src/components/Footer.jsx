import React from 'react';
import styled from "@emotion/styled";

const Footer = () => {
  return(
    <Container>
      <div style={{ marginBottom: "12px" }}>
        <IconLink href="https://www.facebook.com/mitch.tolnay">
          <Icon className="fa fa-facebook" />
        </IconLink>
        <IconLink href="https://www.instagram.com/mitchinthemountains/">
          <Icon className="fa fa-instagram" />
        </IconLink>
        <IconLink href="https://soundcloud.com/mitchinthemountains">
          <Icon className="fa fa-soundcloud" />
        </IconLink>
      </div>
      <p style={{ margin: 0 }}>Copyright © 2021 Mitch Tolnay</p>
    </Container>
  );
};

export default Footer;

const Container = styled.div({
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  position: "fixed",
  bottom: 0,
  right: 0,
  left: 0,
  background: "black",
  color: "white",
  flexDirection: "column",
  padding: "24px 0 40px",
});

const IconLink = styled.a({
  textDecoration: "none",
});

const Icon = styled.i({
  fontSize: "28px",
  margin: "12px",
  color: "white",
});