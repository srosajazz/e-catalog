import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { ProductsResponse } from '../../core/types/Product';
import { makeRequest } from '../../core/utils/request';
import ProductCard from './components/ProductCard';
import './styles.scss';
import ProductCardLoader from './components/ProductCardLoader/index';

const Catalog = () => {
  const [productsResponse, setProductsResponse] = useState<ProductsResponse>();
  const [isLoading, setIsLoading] = useState(false);
  console.log(productsResponse);

  useEffect(() => {
    const params = {
      page: 0,
      linesPerPage: 12,
    };

    //start loading
    setIsLoading(true);
    makeRequest({ url: '/products', params })
      .then((response) => setProductsResponse(response.data))
      .finally(() => {
        //ennd loading
        setIsLoading(false);
      });
  }, []);

  return (
    <div className="catalog-container">
      <h1 className="catalog-title">Products Catalog</h1>
      <div className="catalog-products">
        {isLoading ? (
          <ProductCardLoader />
        ) : (
          productsResponse?.content.map((product) => (
            <Link to={`/products/${product.id}`} key={product.id}>
              <ProductCard product={product} />
            </Link>
          ))
        )}
      </div>
    </div>
  );
};

export default Catalog;
