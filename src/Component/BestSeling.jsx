import React from "react";
import { AiOutlinePlus } from "react-icons/ai";
import { Link } from "react-router-dom";
import Product1 from "./../assets/img/product2.jpeg";
import Product2 from "./../assets/img/product3.jpeg";
import Product3 from "./../assets/img/product4.jpeg";
import Product4 from "./../assets/img/product5.jpeg";

const BestSeling = () => {
  return (
    <React.Fragment>
      <div className="products-area two pb-70">
        <div className="container">
          <div className="section-title">
            <h2>Best Selling Products</h2>
          </div>
          <div className="row">
            <div className="col-sm-6 col-lg-3">
              <div className="products-item">
                <div className="top">
                  {/* <a className="wishlist" to="#">
                    <i className="bx bx-heart" />
                  </a> */}
                  <img src={Product1} alt="Products" />
                  <div className="inner">
                    <h3>
                      <Link to="single-product.html">SKULLY Helmet</Link>
                    </h3>
                    <span>$200.00</span>
                  </div>
                </div>
                <div className="bottom">
                  <Link className="cart-text" to="#">
                    Add To Cart
                  </Link>
                  <i className="bx bx-plus">
                    {" "}
                    <AiOutlinePlus />{" "}
                  </i>
                </div>
              </div>
            </div>
            <div className="col-sm-6 col-lg-3">
              <div className="products-item">
                <div className="top">
                  {/* <a className="wishlist" to="#">
                    <i className="bx bx-heart" />
                  </a> */}
                  <img src={Product2} alt="Products" />
                  <div className="inner">
                    <h3>
                      <Link to="single-product.html">AERO Helmet</Link>
                    </h3>
                    <span>$180.00</span>
                  </div>
                </div>
                <div className="bottom">
                  <Link className="cart-text" to="#">
                    Add To Cart
                  </Link>
                  <i className="bx bx-plus">
                    {" "}
                    <AiOutlinePlus />{" "}
                  </i>
                </div>
              </div>
            </div>
            <div className="col-sm-6 col-lg-3">
              <div className="products-item">
                <div className="top">
                  {/* <a className="wishlist" to="#">
                    <i className="bx bx-heart" />
                  </a> */}
                  <img src={Product3} alt="Products" />
                  <div className="inner">
                    <h3>
                      <Link to="single-product.html">SKULLY Helmet</Link>
                    </h3>
                    <span>$170.00</span>
                  </div>
                </div>
                <div className="bottom">
                  <Link className="cart-text" to="#">
                    Add To Cart
                  </Link>
                  <i className="bx bx-plus">
                    <AiOutlinePlus />
                  </i>
                </div>
              </div>
            </div>
            <div className="col-sm-6 col-lg-3">
              <div className="products-item">
                <div className="top">
                  {/* <a className="wishlist" to="#">
                    <i className="bx bx-heart" />
                  </a> */}
                  <img src={Product4} alt="Products" />
                  <div className="inner">
                    <h3>
                      <Link to="single-product.html">
                        SR Swiss Precision Race Bearings
                      </Link>
                    </h3>
                    <span>$190.00</span>
                  </div>
                </div>
                <div className="bottom">
                  <Link className="cart-text" to="#">
                    Add To Cart
                  </Link>
                  <i className="bx bx-plus">
                    {" "}
                    <AiOutlinePlus />{" "}
                  </i>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </React.Fragment>
  );
};
export default BestSeling;
