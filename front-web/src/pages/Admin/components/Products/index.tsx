import React from 'react';
import { Link, Route, Switch } from 'react-router-dom';
import './styles.scss';

const Products = () => {
  return (
    <div>
      <Link to="/admin/products" className="mr-5">
        List Products
      </Link>
      <Link to="/admin/products/create" className="mr-5">
        CreateProducts
      </Link>
      <Link to="/admin/products/10" className="mr-5">
        Edit Products
      </Link>
      <Switch>
        <Route path="/admin/products" exact>
          <h1>Produts List</h1>
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
