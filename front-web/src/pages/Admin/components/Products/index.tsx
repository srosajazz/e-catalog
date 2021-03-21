import React from 'react';
import { Route, Switch } from 'react-router-dom';
import List from './List';
import './styles.scss';

const Products = () => {
  return (
    <div>
      <Switch>
        <Route path="/admin/products" exact>
          <List />
        </Route>
        <Route path="/admin/products/create">
          <h1>Create new Product</h1>
        </Route>
        <Route path="/admin/products/:productId">
          <h1>EDit Product</h1>
        </Route>
      </Switch>
    </div>
  );
};

export default Products;
