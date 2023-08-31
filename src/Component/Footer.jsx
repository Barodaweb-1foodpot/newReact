import React from "react";
import {
  FaFacebookF,
  FaInstagram,
  FaLinkedinIn,
  FaTwitter,
  FaYoutube,
} from "react-icons/fa";
import { FiPhoneCall } from "react-icons/fi";
import { HiOutlineLocationMarker, HiOutlineMail } from "react-icons/hi";
import { Link } from "react-router-dom";
import Logo from "./../assets/img/logo.png";
import Payment1 from "./../assets/img/payment1.png";
import Payment2 from "./../assets/img/payment2.png";
import Payment3 from "./../assets/img/payment3.png";
import Payment4 from "./../assets/img/payment4.png";
import Shap8 from "./../assets/img/shape8.png";
import Shap9 from "./../assets/img/shape9.png";

const Footer = () => {
  return (
    <React.Fragment>
      <footer className="footer-area two pt-100 pb-70">
        <div className="footer-shape">
          <img src={Shap8} alt="Shape" />
          <img src={Shap9} alt="Shape" />
        </div>
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-sm-6 col-lg-4">
              <div className="footer-item">
                <div className="footer-logo">
                  <Link className="logo" to="/">
                    <img src={Logo} alt="Logo" />
                  </Link>
                  <ul>
                    <li>
                      <i className="flaticon-pin">
                        <HiOutlineLocationMarker />
                      </i>
                      <Link to="#">
                        Simmons Rana Racing, 105 Gokuldham Arcade, Sarkhej-
                        Sanand Highway, Sanathal, Ahmedabad- 382210, Gujarat,
                        India.
                      </Link>
                      {/* <a to="#">345-659 Birmingham Street, England</a> */}
                    </li>
                    <li>
                      <i className="flaticon-phone-call">
                        <FiPhoneCall />
                      </i>
                      <Link to="(+91) 98253 22522">(+91) 98253 22522</Link>
                      {/* <a to="tel:+5465486325">+546-548-6325</a> */}
                    </li>
                    <li>
                      <i className="flaticon-email">
                        <HiOutlineMail />
                      </i>
                      <Link to="#">
                        <span
                          className="__cf_email__"
                          data-cfemail="f199949d9d9eb194929e81df929e9c"
                        >
                          Support@eCommerce.com
                        </span>
                      </Link>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
            <div className="col-sm-6 col-lg-4">
              <div className="footer-item">
                <div className="footer-services">
                  <h3>Customer Services</h3>
                  <ul>
                    <li>
                      <Link to="return-policy.html">Return Policy</Link>
                    </li>
                    <li>
                      <Link to="faq.html">FAQ</Link>
                    </li>
                    <li>
                      <Link to="single-product.html">Single Product</Link>
                    </li>
                    <li>
                      <Link to="order-tracking.html">Order Tracking</Link>
                    </li>
                    <li>
                      <Link to="privacy-policy.html">Privacy Policy</Link>
                    </li>
                    <li>
                      <Link to="contact.html">Contact Us</Link>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
            <div className="col-sm-6 col-lg-4">
              <div className="footer-item">
                <div className="footer-links">
                  <h3>Important Links</h3>
                  <div className="row">
                    <div className="col-6 col-sm-8 col-lg-8">
                      <ul>
                        <li>
                          <Link to="about.html">About Us</Link>
                        </li>
                        <li>
                          <Link to="blog.html">Blog</Link>
                        </li>
                        <li>
                          <Link to="#">Wishlist</Link>
                        </li>
                        <li>
                          <Link to="#">Checkout</Link>
                        </li>
                        <li>
                          <Link to="shop.html">Shop</Link>
                        </li>
                        <li>
                          <Link to="login.html">My Account</Link>
                        </li>
                      </ul>
                    </div>
                    <div className="col-6 col-sm-4 col-lg-4">
                      <ul>
                        <li>
                          <Link to="#">Boots</Link>
                        </li>
                        <li>
                          <Link to="#">Frames</Link>
                        </li>
                        <li>
                          <Link to="#">Wheels</Link>
                        </li>
                        <li>
                          <Link to="#">Bearings</Link>
                        </li>
                        <li>
                          <Link to="#">Accessories</Link>
                        </li>
                        <li>
                          <Link to="#">Apparels </Link>
                        </li>
                        <li>
                          <Link to="#">Helmet </Link>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="row align-items-center">
            <div className="col-sm-6 col-lg-6">
              <div className="payment-cards">
                <ul>
                  <li>
                    <Link to="#" target="_blank">
                      <img src={Payment1} alt="Payment" />
                    </Link>
                  </li>
                  <li>
                    <Link to="#" target="_blank">
                      <img src={Payment2} alt="Payment" />
                    </Link>
                  </li>
                  <li>
                    <Link to="#" target="_blank">
                      <img src={Payment3} alt="Payment" />
                    </Link>
                  </li>
                  <li>
                    <Link to="#" target="_blank">
                      <img src={Payment4} alt="Payment" />
                    </Link>
                  </li>
                </ul>
              </div>
            </div>
            <div className="col-sm-6 col-lg-6">
              <div className="social-links">
                <ul>
                  <li>
                    <Link to="#" target="_blank">
                      <i className="bx bxl-facebook">
                        {" "}
                        <FaFacebookF />
                      </i>
                    </Link>
                  </li>
                  <li>
                    <Link to="#" target="_blank">
                      <i className="bx bxl-twitter">
                        <FaTwitter />
                      </i>
                    </Link>
                  </li>
                  <li>
                    <Link to="#" target="_blank">
                      <i className="bx bxl-linkedin">
                        <FaInstagram />
                      </i>
                    </Link>
                  </li>
                  <li>
                    <Link to="#" target="_blank">
                      <i className="bx bxl-linkedin">
                        <FaLinkedinIn />{" "}
                      </i>
                    </Link>
                  </li>
                  <li>
                    <Link to="#" target="_blank">
                      <i className="bx bxl-youtube">
                        <FaYoutube />{" "}
                      </i>
                    </Link>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </footer>
      <div className="copyright-area two">
        <div className="container">
          <div className="copyright-item">
            <p>
              Copyright ©2023 Design &amp; Developed by{" "}
              <Link to="https://www.barodaweb.com/" target="_blank">
                Barodaweb : The E-Catalogue Designer
              </Link>
            </p>
          </div>
        </div>
      </div>
    </React.Fragment>
  );
};
export default Footer;
