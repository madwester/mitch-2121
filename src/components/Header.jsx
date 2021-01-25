import React, { useState } from "react";
import { Link } from "react-router-dom";
import styled from "@emotion/styled";
import { keyframes } from "@emotion/react";
import { BREAKPOINT } from "../shared/breakpoint";
import { NavLink } from "react-router-dom";
import FONTS from '../shared/fonts';

const Header = () => {
  const [show, setShow] = useState(false);
  const headerLinks = ['biography', 'music', 'contact']
  return (
    <Container>
      <Logo dark={show} exact to="/">Mitch Tolnay</Logo>
      <HeaderLinks>
        {headerLinks.map(link => (
          <LinkStyled exact to={`/${link}`}>{link}</LinkStyled>
        ))}
      </HeaderLinks>
      <BurgerMenuButton onClick={() => setShow(!show)}>
        <BurgerLine active={show} className="top" />
        <BurgerLine active={show} className="bottom" />
      </BurgerMenuButton>
      <MobileHeader show={show}>
          <MobileHeaderLinks show={show}>
            {headerLinks.map(link => (
              <MobileLinkStyled exact to={`/${link}`}>{link}</MobileLinkStyled>
          ))}
          </MobileHeaderLinks>
      </MobileHeader>
    </Container>
  );
};

export default Header;

const fadeAnimation = keyframes({
  "0%": { opacity: 0.2 },
  "50%": { opacity: 0.6 },
  "100%": { opacity: 1 },
});

const moveInBottomAnimation = keyframes({
  "0%": { opacity: 0, transform: "translateY(3rem)" },
  "0%": { opacity: 0, transform: "translateY(-1rem)" },
  "0%": { opacity: 1, transform: "translateY(0)" }
});

const Container = styled.div({
  display: "flex",
  fontSize: "14px",
  justifyContent: "space-between",
  height: "100px",
  alignItems: "center",
  padding: "0 40px",
  color: "white",
  position: "fixed",
  top: 0,
  left: 0,
  right: 0
});

const Logo = styled(Link)(({ dark }) => ({
  fontSize: "46px",
  fontWeight: 900,
  textDecoration: "none",
  textTransform: "capitalize",
  color: dark ? "black" : "white",
  position: "relative",
  zIndex: 1,
  fontFamily: FONTS.amita,
  fontFamily: FONTS.another,
  fontFamily: FONTS.caveat,
  fontFamily: FONTS.caveatBrush,
  fontFamily: FONTS.covered,
  fontFamily: FONTS.drSugiyama, //yep
  fontFamily: FONTS.gochi,
  fontFamily: FONTS.hachi,
  fontFamily: FONTS.longCang,
  fontFamily: FONTS.mansalva,
  fontFamily: FONTS.reenie, //yep
}));

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
  textTransform: "capitalize"
});

const MobileHeader = styled.div(({ show }) => ({
  animationDuration: "0.2s",
  animationName: fadeAnimation,
  background: "white",
  bottom: 0,
  display: show ? "flex" : "none",
  left: 0,
  position: "fixed",
  right: 0,
  top: 0,
  flexDirection: "column",
  alignItems: "center",
  justifyContent: "center",
  transition: "0.6s all"
}));

const MobileHeaderLinks = styled.div(({ show }) => ({
  animationDuration: "0.2s",
  animationName: moveInBottomAnimation,
  display: show ? "block" : "none",
  textAlign: "center",
  transform: show && "translateY(-32px)",
  transition: "0.3s all"
}));

const MobileLinkStyled = styled(NavLink)({
  color: "black",
  display: "block",
  fontSize: "24px",
  marginBottom: "12px",
  textDecoration: "none",
  textTransform: "uppercase"
});

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
  background: active ? "black" : "white",
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
