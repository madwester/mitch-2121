import React, { useEffect, useState } from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import FONTS from "./shared/fonts";
import "@fortawesome/fontawesome-free/js/all";
import { css } from "@emotion/react";
import { Global } from "@emotion/react";
import "./App.css";
import Home from "./pages/Home";
import Music from "./pages/Music";
import Contact from "./pages/Contact";
import Biography from "./pages/Biography";
import styled from "@emotion/styled";
import Footer from "./components/Footer";
import Header from "./components/Header";
import Events from "./pages/Events";

import BREAKPOINTS from "./shared/breakpoints";

const globalStyles = css({
  "*": {
    boxSizing: "border-box",
    fontFamily: FONTS.poppins,
    lineHeight: 1.5,
  },
});

const App = () => {
  const [offsetY, setOffsetY] = useState(0);
  const handleScroll = () => setOffsetY(window.pageYOffset);

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <Router>
      <Global styles={globalStyles} />
      <Main offsetY={offsetY}>
        <Header />
        <Wrapper>
          <Switch>
            <Route exact path="/">
              <Home />
            </Route>
            <Route exact path="/music">
              <Music />
            </Route>
            <Route exact path="/biography">
              <Biography />
            </Route>
            <Route exact path="/events">
              <Events />
            </Route>
            <Route exact path="/contact">
              <Contact />
            </Route>
          </Switch>
        </Wrapper>
        <Footer />
      </Main>
    </Router>
  );
};

export default App;

const Main = styled.div(({ offsetY }) => ({
  display: "flex",
  flexDirection: "column",
  minHeight: "100vh",
  padding: "0 24px",
  position: "relative",

  [`@media (max-width: ${BREAKPOINTS.small}px)`]: {
    padding: 0,
  },
}));

const Wrapper = styled.div({
  flexGrow: 1,
});
