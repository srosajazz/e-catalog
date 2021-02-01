import './styles.scss';
import { ReactComponent as ProductImage } from '../../../../core/assets/images/product.svg';
const ProductCard = () => (
  <div className="card-base border-radius-10 product-card">
    <ProductImage />
    <div className="product-info">
      <h6 className="product-name">New Inspiron 24 5000 - Bipod Stand</h6>

      <div className="product-price-container">
        <span className="product-currency">U$</span>
        <h3 className="product-price">1,151.99</h3>
      </div>
    </div>
  </div>
);
export default ProductCard;
