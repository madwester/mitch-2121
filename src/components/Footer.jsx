import React from "react";
import styled from "@emotion/styled";
import { socialLinks } from "../shared/socialLinks";
import BREAKPOINTS from "../shared/breakpoints";

const Footer = () => {
  return (
    <Container>
      <div style={{ marginBottom: "12px" }}>
        {socialLinks.map((link, i) => (
          <IconLink href={link.href} key={i}>
            <Icon className={link.className} />
          </IconLink>
        ))}
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
  background: "#eee",
  color: "black",
  flexDirection: "column",
  padding: "60px 0 60px",
  marginTop: "120px",

  [`@media (max-width: ${BREAKPOINTS.small}px)`]: {
    marginTop: "40px",
  },
});

const IconLink = styled.a({
  textDecoration: "none",
});

const Icon = styled.i({
  fontSize: "22px",
  margin: "12px",
  color: "black",
});
