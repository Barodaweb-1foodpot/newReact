import React from "react";
import { Link } from "react-router-dom";
import ProductImg from "./../assets/img/bestProduct.webp";
import Shape1 from "./../assets/img/shape1.png";
import Shape2 from "./../assets/img/shape2.png";
import Shap6 from "./../assets/img/shape6.png";
import Shap7 from "./../assets/img/shape7.png";

const BestProduct = () => {
  return (
    <React.Fragment>
      <div className="buy-area two ptb-100">
        <div className="buy-shape">
          <img src={Shap6} alt="Shape" />
          <img src={Shap7} alt="Shape" />
        </div>
        <div className="container">
          <div className="row align-items-center">
            <div className="col-lg-6">
              <div className="buy-content">
                <h2>Buy Best Skate At A Cheaper Rate</h2>
                <p>Skate</p>
                <ul>
                  <li>$160.00</li>
                  <li>
                    <del>$200.00</del>
                  </li>
                </ul>
                <Link className="common-btn two" to="#">
                  Shop Now
                  <img src={Shape1} alt="Shape" />
                  <img src={Shape2} alt="Shape" />
                </Link>
              </div>
            </div>
            <div className="col-lg-6">
              <div className="buy-img">
                <img src={ProductImg} alt="Buy" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </React.Fragment>
  );
};
export default BestProduct;
