import React, { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import styled from "@emotion/styled";
import { keyframes } from "@emotion/react";
import BREAKPOINTS from "../shared/breakpoints";
import { NavLink } from "react-router-dom";
import FONTS from "../shared/fonts";
import { socialLinks } from "../shared/socialLinks";
import { headerItems } from "../shared/headerItems";
import { HeaderHeight } from "../shared/constants";

const Header = () => {
  const [scrollingDown, setScrollingDown] = useState(false);
  const [scrollTop, setScrollTop] = useState(0);
  const [showFullScreen, setShow] = useState(false);
  const location = useLocation();
  const path = location.pathname;

  useEffect(() => {
    const onScroll = () => {
      let currentPosition = window.pageYOffset; // or use document.documentElement.scrollTop;
      if (currentPosition > scrollTop) {
        setScrollingDown(true);
      } else {
        setScrollingDown(false);
      }
      setScrollTop(currentPosition <= 0 ? 0 : currentPosition);
    };

    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, [scrollTop]);

  return (
    <Container scrollingDown={scrollingDown}>
      <DesktopWrapper>
        <HeaderLinks>
          {headerItems.map((item, i) => (
            <LinkStyled
              active={path.includes(item.slug.toLowerCase())}
              key={i}
              to={`/${item.slug}`}
            >
              {item.title}
            </LinkStyled>
          ))}
        </HeaderLinks>
        <Logo showFullScreen={showFullScreen} to="/">
          Mitch Tolnay
        </Logo>
        <SocialLinks>
          {socialLinks.map((link, i) => (
            <IconLink href={link.href} key={i}>
              <Icon className={link.className} />
            </IconLink>
          ))}
        </SocialLinks>
      </DesktopWrapper>

      <BurgerMenuButton onClick={() => setShow(!showFullScreen)}>
        <BurgerLine active={showFullScreen} className="top" />
        <BurgerLine active={showFullScreen} className="bottom" />
      </BurgerMenuButton>
      <MobileFullScreenContainer show={showFullScreen}>
        <MobileHeaderLinks show={showFullScreen}>
          {headerItems.map((item, i) => (
            <MobileLinkStyled exact={true} key={i} to={`/${item.slug}`}>
              {item.title}
            </MobileLinkStyled>
          ))}
        </MobileHeaderLinks>
        <MobileSocialLinks>
          {socialLinks.map((link, i) => (
            <IconLink href={link.href} key={i}>
              <Icon className={link.className} />
            </IconLink>
          ))}
        </MobileSocialLinks>
      </MobileFullScreenContainer>
    </Container>
  );
};

export default Header;

const fadeAnimation = keyframes({
  "0%": { opacity: 0.2 },
  "50%": { opacity: 0.6 },
  "100%": { opacity: 1 },
});

const moveInFromBottomLongAnimation = keyframes({
  "0%": { opacity: 0, transform: "translateY(4rem)" },
  "100%": { opacity: 1, transform: "translateY(0)" },
});

const moveInFromBottomShortAnimation = keyframes({
  "0%": { opacity: 0, transform: "translateY(2rem)" },
  "100%": { opacity: 1, transform: "translateY(0)" },
});

const moveInFromTopAnimation = keyframes({
  "0%": { opacity: 0, transform: "translateY(-30rem)" },
  "50%": { opacity: 0.5, transform: "translateY(10rem)" },
  "100%": { opacity: 1, transform: "translateY(0)" },
});

const Container = styled.div(({ scrollingDown }) => ({
  alignItems: "center",
  color: "black",
  display: "flex",
  fontSize: "14px",
  height: HeaderHeight,
  width: "100%",
  padding: "0",
  position: "relative",
  margin: "0 auto",
  maxWidth: "1600px",

  [`@media (max-width: ${BREAKPOINTS.small}px)`]: {
    justifyContent: "space-between",
    padding: "0 24px",
  },
}));

const DesktopWrapper = styled.div({
  alignItems: "center",
  display: "flex",
  width: "100%",
  "& > *": {
    width: "33%",
  },
});
const Logo = styled(Link)(({ showFullScreen }) => ({
  fontSize: "40px",
  fontFamily: FONTS.reenie,
  fontWeight: 700,
  textDecoration: "none",
  textTransform: "capitalize",
  color: "black",
  position: "relative",
  textAlign: "center",
  zIndex: 2,

  [`@media (max-width: ${BREAKPOINTS.small}px)`]: {
    textAlign: "left",
    width: "100%",
    color: showFullScreen ? "black" : "white",
  },
}));

const HeaderLinks = styled.div({
  display: "flex",
  fontFamily: FONTS.poppins,
  textTransform: "capitalize",
  [`@media (max-width: ${BREAKPOINTS.small}px)`]: {
    display: "none",
  },
});

const LinkStyled = styled(Link)(({ active }) => ({
  borderBottom: active ? "1px solid black" : 0,
  marginRight: "20px",
  color: "black",
  fontSize: "16px",
  textDecoration: "none",
  paddingBottom: "4px",
}));

const SocialLinks = styled.div({
  display: "flex",
  justifyContent: "flex-end",

  [`@media (max-width: ${BREAKPOINTS.small}px)`]: {
    display: "none",
  },
});

const IconLink = styled.a({
  textDecoration: "none",
});

const Icon = styled.i({
  fontSize: "22px",
  marginLeft: "20px",
  color: "black",
});

const MobileFullScreenContainer = styled.div(({ show }) => ({
  alignItems: "center",
  background: "white",
  bottom: 0,
  display: show ? "flex" : "none",
  flexDirection: "column",
  height: "100vh",
  justifyContent: "center",
  left: 0,
  opacity: show ? 1 : 0,
  position: "fixed",
  right: 0,
  top: 0,
  zIndex: 1,
  transition: "0.3s all",
}));

const MobileHeaderLinks = styled.div(({ show }) => ({
  animationDuration: "0.8s",
  animationName: moveInFromBottomLongAnimation,
  display: show ? "block" : "none",
  textAlign: "center",
}));

const MobileLinkStyled = styled(NavLink)({
  color: "black",
  display: "block",
  fontSize: "24px",
  marginBottom: "12px",
  textDecoration: "none",
  textTransform: "uppercase",
});

const MobileSocialLinks = styled.div({
  animationName: moveInFromBottomShortAnimation,
  animationDuration: "1s",
  bottom: "70px",
  position: "absolute",
  transition: "1s all",
});

const BurgerMenuButton = styled.button({
  display: "none",

  [`@media (max-width: ${BREAKPOINTS.small}px)`]: {
    display: "flex",
    position: "relative",
    alignItems: "center",
    justifyContent: "center",
    width: "35px",
    height: "35px",
    background: "transparent",
    border: 0,
    outline: "none",
    zIndex: 2,
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
