import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import ProductCard from './components/ProductCard';
import './styles.scss';

const Catalog = () => {
  // when start components, search product list

  // when search list product is availble

  // popular a state in the component list the products dynamically

  useEffect(() => {
    fetch('http://localhost:3000/products')
      .then((response) => response.json())
      .then((response) => console.log(response));
  }, []);
  return (
    <div className="catalog-container">
      <h1 className="catalog-title">Products Catalog</h1>
      <div className="catalog-products">
        <Link to="/products/1">
          <ProductCard />
        </Link>
        <Link to="/products/2">
          <ProductCard />
        </Link>
        <Link to="/products/3">
          <ProductCard />
        </Link>
        <Link to="/products/4">
          <ProductCard />
        </Link>
        <Link to="/products/5">
          <ProductCard />
        </Link>
        <Link to="/products/6">
          <ProductCard />
        </Link>
        <Link to="/products/7">
          <ProductCard />
        </Link>
        <Link to="/products/8">
          <ProductCard />
        </Link>
        <Link to="/products/9">
          <ProductCard />
        </Link>
        <Link to="/products/10">
          <ProductCard />
        </Link>
        <Link to="/products/11">
          <ProductCard />
        </Link>
      </div>
    </div>
  );
};

export default Catalog;
