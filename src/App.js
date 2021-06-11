import React from "react";
import AboutUs from "./pages/AboutUs";
import Nav from "./components/Nav";

import GlobalStyle from "./components/GlobalStyle";
//Router
import { Switch, Route, useLocation } from "react-router-dom";
const App = () => {
  return (
    <div className="App">
      <GlobalStyle />
      <Nav />
      <Route path="/" exact>
        <AboutUs />
      </Route>
    </div>
  );
};

export default App;
