import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import Catalog from './pages/catalog';
import Home from './pages/Home';
import Admin from './pages/Admin/index';
import Navbar from './core/components/Navbar';

const Routes = () => (
  <BrowserRouter>
    <Navbar />
    <Switch>
      <Route path="/" exact>
        <Home />
      </Route>
      <Route path="/catalog">
        <Catalog />
      </Route>
      <Route path="/admin">
        <Admin />
      </Route>
    </Switch>
  </BrowserRouter>
);

export default Routes;
