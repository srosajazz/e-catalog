import Navbar from './components/Navbar';
import React from 'react';
import { Route, Switch } from 'react-router-dom';
import Products from './components/Products';

const Admin = () => {
  return (
    <div className="admin-container">
      <Navbar />

      <div className="admin-content">
        <Switch>
          <Route path="/admin/products">
            <Products />
          </Route>
          <Route path="/admin/categories">
            <h1>Category</h1>
          </Route>
          <Route path="/admin/users">
            <h1>Users</h1>
          </Route>
        </Switch>
      </div>
    </div>
  );
};

export default Admin;
