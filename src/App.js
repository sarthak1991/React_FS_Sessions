import React, { Component } from 'react';
import Home from "./pages/Home/"
import About from "./pages/About"
import Contact from "./pages/Contact/Contact"
import NavBar from "./utils/Navbar"
import Footer from "./utils/Footer"

import {
  BrowserRouter as Router,
  Route,
  Switch
} from "react-router-dom"


class John extends Component {

  render() {
    return (
      <div>
        <Router>
          <NavBar />
          <Switch>
            <Route exact path="/">
              <Home />
            </Route>
            <Route exact path="/about">
              <About />
            </Route>
            <Route exact path="/contact">
              <Contact />
            </Route>
          </Switch>
          <Footer />
        </Router>

      </div>
    )
  }
}

export default John;

// const John = () => {

// }

// export default John