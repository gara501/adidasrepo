import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import { Simulate } from 'react-dom/test-utils';
import Bag from './pages/bag';
import Popup from './pages/bag';
import Product from './pages/bag';
import Nav from './components/nav';
import Breadcrumb from './components/breadcrumb';

function App() {
  return (
    <Router>
      <Nav />
      <Breadcrumb />
      <Switch>
        <Route exact path="/" component={Product} ></Route>
        <Route path="/checkout" component={Bag} ></Route>
      </Switch>
    </Router>
  );
}

export default App;
