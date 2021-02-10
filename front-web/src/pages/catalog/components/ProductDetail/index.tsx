import React from 'react';
import { Link, useParams } from 'react-router-dom';
import { ReactComponent as ArrowIcon } from '../../../../core/assets/images/arrow.svg';
import { ReactComponent as ProductImage } from '../../../../core/assets/images/product.svg';
import ProductPrice from '../../../../core/components/ProductPrice';
import './styles.scss';

type ParamsType = {
  productId: string;
};

const ProductDetails = () => {
  const { productId } = useParams<ParamsType>();
  console.log(productId);

  return (
    <div className="product-details-container">
      <div className="card-base   border-radius-20 product-details">
        <Link to="/products" className="product-details-goback">
          <ArrowIcon className="icon-goback" />
          <h1 className="text-goback">back</h1>
        </Link>
        <div className="row">
          <div className="col-6 pr-5">
            <div className="product-details-card text-center">
              <ProductImage className="product-details-image" />
            </div>
            <h1 className="product-details-name">OptiPlex Desktop Computers</h1>
            <ProductPrice price="3.899,00" />
          </div>
          <div className="col-6 product-details-card">
            <h1 className="product-description-title">Product Description</h1>
            <p className="product-description-text">
              OptiPlex Desktop Computers Desktops as diverse as your workday
              Starting at $589.00 OptiPlex desktop and all-in-one computers now
              featuring versatile, space-saving form factors and 10th Generation
              Intel® processors to unleash your full potential.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductDetails;
