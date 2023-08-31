import React from "react";
import { AiOutlineArrowRight, AiOutlineShoppingCart } from "react-icons/ai";
import { Link } from "react-router-dom";
import Product from "./../assets/img/bestProduct.webp";
import DealShap from "./../assets/img/deal-shape1.png";

const DealOfTheDay = () => {
  return (
    <React.Fragment>
      <div className="deal-area pt-100 pb-70">
        <div className="container">
          <div className="row">
            <div className="col-lg-6">
              <div className="section-title">
                <h2>Deal Of The Day</h2>
              </div>
              <div className="deal-item">
                <span className="percent">-20%</span>
                <Link className="deal-btn" to="#">
                  <AiOutlineArrowRight />
                </Link>
                <div className="inner align-items-center">
                  <div className="left">
                    <img src={Product} alt="Deal" />
                  </div>
                  <div className="right">
                    <h3>Best Skate</h3>
                    <ul className="price">
                      <li>$130.00</li>
                      <li>
                        <del>$150.00</del>
                      </li>
                    </ul>
                    <ul className="features">
                      <li>
                        <span>Main Features:</span>
                      </li>
                      <li>High Quality Product</li>
                      <li>Confortable Skate</li>
                      {/* <li>Mobile Support</li> */}
                      <li>3+ Years Warranty</li>
                    </ul>
                    <ul className="timer">
                      <li>
                        <div className="timer-inner">
                          <span id="days">-908 </span>
                          <p>Days</p>
                        </div>
                      </li>
                      <li>
                        <div className="timer-inner">
                          <span id="hours">-16</span>
                          <p>Hrs</p>
                        </div>
                      </li>
                      <li>
                        <div className="timer-inner">
                          <span id="minutes"> -47 </span>
                          <p>Mins</p>
                        </div>
                      </li>
                      <li>
                        <div className="timer-inner">
                          <span id="seconds"> -27</span>
                          <p>Secs</p>
                        </div>
                      </li>
                    </ul>
                    <ul className="cart-wishlist">
                      <li>
                        <Link to="#">
                          <i className="bx bxs-cart">
                            <AiOutlineShoppingCart />{" "}
                          </i>
                        </Link>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-lg-6">
              <div className="section-title">
                <h2>Hot Offers</h2>
              </div>
              <div className="deal-item two">
                <span className="percent">-20%</span>
                <Link className="deal-btn" to="#">
                  {/* <i className="bx bx-right-arrow-alt">
                   {" "}
                  </i> */}
                  <AiOutlineArrowRight />
                </Link>
                <div className="inner align-items-center">
                  <div className="left">
                    <img src={Product} alt="Deal" />
                  </div>
                  <div className="right">
                    {/* <ul className="reviews">
                      <li>
                        <i className="bx bxs-star checked" />
                      </li>
                      <li>
                        <i className="bx bxs-star checked" />
                      </li>
                      <li>
                        <i className="bx bxs-star checked" />
                      </li>
                      <li>
                        <i className="bx bxs-star checked" />
                      </li>
                      <li>
                        <i className="bx bxs-star" />
                      </li>
                      <li>
                        <span>(4 Reviews)</span>
                      </li>
                    </ul> */}
                    <h3>Best Skate</h3>
                    <ul className="price">
                      <li>$130.00</li>
                      <li>
                        <del>$150.00</del>
                      </li>
                    </ul>
                    <h4>
                      Get This Product Within: <span>31 December</span>
                    </h4>
                    <ul className="cart-wishlist">
                      <li>
                        <Link to="#">
                          <i className="bx bxs-cart">
                            <AiOutlineShoppingCart />{" "}
                          </i>
                        </Link>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
              <div className="deal-black">
                <img src={DealShap} alt="Shape" />
                <h3>50% Black Friday Sale</h3>
                <Link to="#">View Products</Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </React.Fragment>
  );
};
export default DealOfTheDay;
