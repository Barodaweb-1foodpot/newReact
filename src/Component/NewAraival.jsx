import React from "react";
import { AiOutlinePlus } from "react-icons/ai";
import { Link } from "react-router-dom";
import Halmet from "./../assets/img/helmate.jpeg";
import Product2 from "./../assets/img/product2.jpeg";
import Product3 from "./../assets/img/product3.jpeg";
import Product4 from "./../assets/img/product4.jpeg";
import Product5 from "./../assets/img/product5.jpeg";
import Product6 from "./../assets/img/product6.jpeg";
import Product7 from "./../assets/img/product7.jpeg";
import Product8 from "./../assets/img/product8.jpeg";
import Shape1 from "./../assets/img/shape1.png";
import Shape2 from "./../assets/img/shape2.png";

const NewAraival = () => {
  const newData = [
    {
      img: Halmet,
      title: "SKULLY Helmet",
      price: "USD $ 49.00",
    },
    {
      img: Product2,
      title: "AERO Helmet",
      price: "USD $ 100.00",
    },
    {
      img: Product3,
      title: "SKULLY Helmet",
      price: "USD $ 125.00",
    },
    {
      img: Product4,
      title: "SR Swiss Precision Race Bearings",
      price: "USD $ 115.00",
    },
    {
      img: Product6,
      title: "SR 125 Frames",
      price: "USD $ 329.00",
    },
    {
      img: Product7,
      title: "SR Hilo",
      price: "USD $ 375.00",
    },
    {
      img: Product5,

      title: "Fly Boots",
      price: "USD $ 565.00",
    },

    {
      img: Product8,
      title: "SKULLY Helmet",
      price: "USD $ 49.00",
    },
  ];
  return (
    <React.Fragment>
      <div className="container pb-100">
        <div className="row">
          <div class="section-title">
            <h2>New Arrivals</h2>
          </div>
          {newData?.map((n) => (
            <div className="col-sm-6 col-lg-3">
              <div className="products-item">
                <div className="top">
                  <img src={n.img} alt="Products" />
                  <div className="inner">
                    <h3>
                      <Link to="#">{n.title}</Link>
                    </h3>
                    <span>{n.price}</span>
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
          ))}
        </div>
        <div className="text-center">
          <Link className="common-btn two" to="shop.html">
            Load More Products
            <img src={Shape1} alt="Shape" />
            <img src={Shape2} alt="Shape" />
          </Link>
        </div>
      </div>
    </React.Fragment>
  );
};

export default NewAraival;
