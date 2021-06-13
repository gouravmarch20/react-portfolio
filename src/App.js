import React from "react";
// --- Import Components
import Nav from "./components/Nav";
import GlobalStyle from "./components/GlobalStyle";
//--- Import Pages

import AboutUs from "./pages/AboutUs";
import OurWork from "./pages/OurWork";
import ContactUs from "./pages/ContactUs";
import MovieDetail from './pages/MovieDetail'
//Router
import { Switch, Route, useLocation } from "react-router-dom";
const App = () => {
  return (
    <div className="App">
      <GlobalStyle />
      <Nav />
      <Switch>
        <Route path="/" exact>
          <AboutUs />
        </Route>
        <Route path="/work" exact>
          <OurWork />
        </Route>
        <Route path="/contact" exact>
          <ContactUs />
        </Route>
        <Route path="/work/:id" exact>
          <MovieDetail />
        </Route>
      </Switch>
    </div>
  );
};

export default App;
