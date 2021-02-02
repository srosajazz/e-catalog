import { useParams } from 'react-router-dom';
import './styles.scss';

type ParamsType = {
  productId: string;
};

const ProductDetails = () => {
  const { productId } = useParams<ParamsType>();
  console.log(productId);

  return (
    <div className="product-details-container">
      <h1>Product Detail</h1>
    </div>
  );
};

export default ProductDetails;
