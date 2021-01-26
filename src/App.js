import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import "./App.css";
import { css } from "@emotion/react";
import { Global } from "@emotion/react";
import Home from "./pages/Home";
import Music from "./pages/Music";
import Contact from "./pages/Contact";
import Biography from "./pages/Biography";
import styled from "@emotion/styled";
import Footer from "./components/Footer";
import Header from "./components/Header";
import Events from "./pages/Events";
import FONTS from "./shared/fonts";
import "@fortawesome/fontawesome-free/js/all";

const globalStyles = css({
  "*": {
    boxSizing: "border-box",
    fontFamily: FONTS.mandrope,
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
  position: "relative",
});

const Wrapper = styled.div({
  flexGrow: 1,
});
