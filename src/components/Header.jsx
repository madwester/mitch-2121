import React, { useState } from "react";
import { Link } from "react-router-dom";
import styled from "@emotion/styled";
import { BREAKPOINT } from "../shared/breakpoint";
import { NavLink } from "react-router-dom";

const Header = () => {
  const [show, setShow] = useState(false);
  return (
    <Container>
      <Logo to="/">Mitch Tolnay</Logo>
      <HeaderLinks>
        <LinkStyled to="/biography">Biography</LinkStyled>
        <LinkStyled to="/music">Music</LinkStyled>
        <LinkStyled to="/contact">Contact</LinkStyled>
      </HeaderLinks>
      <BurgerMenuButton onClick={() => setShow(!show)}>
        <BurgerLine active={show} className="top" />
        <BurgerLine active={show} className="bottom" />
      </BurgerMenuButton>
      <FullScreenContainer show={show}>Full screen</FullScreenContainer>
    </Container>
  );
};

export default Header;

const Container = styled.div({
  display: "flex",
  fontSize: "14px",
  justifyContent: "space-between",
  height: "100px",
  alignItems: "center",
  padding: "0 40px",
  background: "black",
  color: "white",
});

const Logo = styled(Link)({
  fontSize: "26px",
  fontWeight: 900,
  textDecoration: "none",
  textTransform: "uppercase",
  color: "white",
});

const HeaderLinks = styled.div({
  [`@media (max-width: ${BREAKPOINT.small}px)`]: {
    display: "none",
  },
});

const LinkStyled = styled(NavLink)({
  color: "white",
  marginLeft: "18px",
  fontSize: "20px",
  textDecoration: "none",
});

const FullScreenContainer = styled.div(({ show }) => ({
  position: "fixed",
  display: show ? "flex" : "none",
  top: 0,
  left: 0,
  right: 0,
  bottom: 0,
  background: "white",
}));

const BurgerMenuButton = styled.button({
  display: "none",

  [`@media (max-width: ${BREAKPOINT.small}px)`]: {
    display: "flex",
    position: "relative",
    alignItems: "center",
    justifyContent: "center",
    width: "35px",
    height: "35px",
    background: "transparent",
    border: 0,
    outline: "none",
    zIndex: 1,
  },
});

const BurgerLine = styled.div(({ active }) => ({
  background: "black",
  position: "absolute",
  display: "block",
  top: "0",
  left: "0",
  bottom: "0",
  margin: "auto",
  content: "''",
  width: "100%",
  height: "1px",
  transition:
    "transform 250ms cubic-bezier(0.2, 0.6, 0.3, 1), width 250ms cubic-bezier(0.2, 0.6, 0.3, 1)",
  willChange: "transform, width",
  "&.top": {
    transform: !active
      ? "translatey(-5.5px)"
      : "translatex(3.5px) rotate(-135deg)",
  },
  "&.bottom": {
    transform: !active
      ? "translatey(5.5px)"
      : "translatex(3.5px) rotate(135deg)",
  },
}));
