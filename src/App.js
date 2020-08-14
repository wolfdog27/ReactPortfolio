import React from 'react';
import './App.css';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import About from "./pages/About"
import Search from './pages/Search';
import Portfolio from './pages/Portfolio';
import HeaderComp from "./components/Header"
import FooterComp from "./components/Footer"

function App() {
  return (
    <Router> 
      <HeaderComp/>
    <Switch>
      <Route path="/about">
        <About/>
      </Route>
      <Route path = "/portfolio">
        <Portfolio/>
      </Route>
      <Route path = "/search">
        <Search/>
      </Route>
      <Route exact path="/">
        <About/>
      </Route>
    </Switch>
    <FooterComp />
  </Router>
  );
}



export default App;
