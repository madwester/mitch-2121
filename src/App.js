import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import "./App.css";
import { css } from "@emotion/react";
import { Global } from "@emotion/react";
import Home from "./pages/Home";
import Home2 from "./pages/Home2";
import Music from "./pages/Music";
import Contact from "./pages/Contact";
import Biography from "./pages/Biography";
import styled from "@emotion/styled";
import Footer from "./components/Footer";
import Header from "./components/Header";
import Events from "./pages/Events";
import FONTS from "./shared/fonts";
import "@fortawesome/fontawesome-free/js/all";
import { BREAKPOINT } from "./shared/breakpoint";

const globalStyles = css({
  "*": {
    boxSizing: "border-box",
    fontFamily: FONTS.poppins,
    lineHeight: 1.5,
  },
});

const App = () => {
  return (
    <Router>
      <Global styles={globalStyles} />
      <Main>
        <Header />
        <Wrapper>
          <Switch>
            <Route exact path="/">
              <Home />
            </Route>
            <Route exact path="/home2">
              <Home2 />
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

const Main = styled.div({
  display: "flex",
  flexDirection: "column",
  minHeight: "100vh",
  padding: "0 24px",
  position: "relative",

  [`@media (max-width: ${BREAKPOINT.small}px)`]: {
    padding: 0,
  },
});

const Wrapper = styled.div({
  flexGrow: 1,
});
