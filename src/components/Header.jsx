import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import styled from "@emotion/styled";
import { keyframes } from "@emotion/react";
import { BREAKPOINT } from "../shared/breakpoint";
import { NavLink } from "react-router-dom";
import FONTS from '../shared/fonts';
import { socialLinks } from '../shared/socialLinks';
import { headerItems } from '../shared/headerItems';
import COLORS from "../shared/colors";

const Header = () => {
  const [scrollingDown, setScrollingDown] = useState(false);
  const [scrollTop, setScrollTop] = useState(0);
  let path = window.location.pathname;

  useEffect(() => {
    const onScroll = () => {
      let currentPosition = window.pageYOffset; // or use document.documentElement.scrollTop;
      if (currentPosition > scrollTop) {
        setScrollingDown(true);
      } else {
        setScrollingDown(false);
      }
      setScrollTop(currentPosition <= 0 ? 0 : currentPosition);
    }

    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, [scrollTop]);

  const [show, setShow] = useState(false);
  return (
    <Container scrollingDown={scrollingDown}>
      <HeaderLinks>
        {headerItems.map((item, i) => {
        return (
          <LinkWrapper active={path.includes(item.title)}>
            <LinkStyled
              
              exact to={`/${item.slug}`}
              key={i}
            >
              {item.title}
            </LinkStyled>
          </LinkWrapper>
         
        )})}
      </HeaderLinks>
      <Logo dark={show} exact to="/">Mitch Tolnay</Logo>
      <SocialLinks>
      {socialLinks.map(link => (
          <IconLink href={link.href}>
            <Icon className={link.className} />
          </IconLink>
        ))}
      </SocialLinks>
      <BurgerMenuButton onClick={() => setShow(!show)}>
        <BurgerLine active={show} className="top" />
        <BurgerLine active={show} className="bottom" />
      </BurgerMenuButton>
      <MobileHeader show={show}>
          <MobileHeaderLinks show={show}>
            {headerItems.map((item, i) => (
              <MobileLinkStyled exact key={i} to={`/${item.slug}`}>{item.title}</MobileLinkStyled>
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
  "50%": { opacity: 0, transform: "translateY(-1rem)" },
  "100%": { opacity: 1, transform: "translateY(0)" }
});

const Container = styled.div(({ scrollingDown }) => ({
  alignItems: "center",
  color: "black",
  display: "flex",
  fontSize: "14px",
  height: "120px",
  width: "100%",
  padding: "0",
  position: "relative",
  margin: "0 auto",
  maxWidth: "1400px",

  "& > *": {
    width: "33%"
  }
}));

const Logo = styled(Link)(({ dark }) => ({
  fontSize: "26px",
  fontWeight: 700,
  textDecoration: "none",
  textTransform: "capitalize",
  color: "black",
  position: "relative",
  zIndex: 1,
  textAlign: "center",
}));

const HeaderLinks = styled.div({
  display: "flex",
  fontFamily: FONTS.poppins,
  textTransform: "capitalize",
  [`@media (max-width: ${BREAKPOINT.small}px)`]: {
    display: "none",
  },
});

const LinkWrapper = styled.div(({ active }) => ({
  borderBottom: active ? "1px solid black" : 0,
  marginRight: "20px",
}));

const LinkStyled = styled(NavLink)(({ active }) => ({
  color: "black",
  
  fontSize: "16px",
  textDecoration: "none"
}));

const SocialLinks = styled.div({
  display: "flex",
  justifyContent: "flex-end"
});

const IconLink = styled.a({
  textDecoration: "none",
});

const Icon = styled.i({
  fontSize: "22px",
  marginLeft: "20px",
  color: COLORS.secondary,
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
  background: active ? "black" : "black",
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
