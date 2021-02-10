import './styles.scss';
import { ReactComponent as ProductImage } from '../../../../core/assets/images/product.svg';
import React from 'react';
import ProductPrice from '../../../../core/components/ProductPrice';
const ProductCard = () => (
  <div className="card-base border-radius-10 product-card">
    <ProductImage />
    <div className="product-info">
      <h6 className="product-name">New Inspiron 24 5000 - Bipod Stand</h6>
      <ProductPrice price="2.899,00" />
    </div>
  </div>
);
export default ProductCard;
