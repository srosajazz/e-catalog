import { ReactComponent as MainImage } from '../../core/assets/images/main-image.svg';

import './styles.scss';

const Home = () => (
  <div className="home-container">
    <div className="row home-content">
      <div className="col-6">
        <h1 className="text-title">Find the best product on our catalog </h1>

        <p className="text-subtitle">
          We will help you find the best <br />
          products available on the market.
        </p>
      </div>
      <div className="col-6">
        <MainImage className="main-image" />
      </div>
    </div>
  </div>
);

export default Home;
