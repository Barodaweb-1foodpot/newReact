import React from "react";
import { AiOutlineDown, AiOutlineShoppingCart } from "react-icons/ai";
import { BiSolidOffer, BiUserCircle } from "react-icons/bi";
import { BsSearch } from "react-icons/bs";
import { FiPhoneCall } from "react-icons/fi";
import { HiOutlineLocationMarker } from "react-icons/hi";
import { IoIosHelpCircleOutline } from "react-icons/io";
import { RiCustomerService2Fill } from "react-icons/ri";
import { TbTruckDelivery } from "react-icons/tb";
import { Link } from "react-router-dom";
import Logo from "./../assets/img/logo.png";
import BestProduct from "./BestProduct";
import BestSeling from "./BestSeling";
import Blog from "./Blog";
import Categories from "./Categories";
import ClientTestimal from "./ClientTestimal";
import DealOfTheDay from "./DealOfTheDay";
import Delivery from "./Delivery";
import Footer from "./Footer";
import NewAraival from "./NewAraival";
import Offer from "./Offer";
import TrustableBrand from "./TrustableBrand";
import HeaderVideo from "./VideoSlider";

const Hader = () => {
  return (
    <React.Fragment>
      <div className="header-area two">
        <div className="container-fluid">
          <div className="row align-items-center">
            <div className="col-sm-6 col-lg-7">
              <div className="left">
                <ul>
                  <li>
                    <TbTruckDelivery className="flaticon-delivery-truck" />
                    <span>Free Next Day Delivery*</span>
                  </li>
                  <li>
                    <BiSolidOffer />
                    <span>Best Price Guarantee</span>
                  </li>
                  <li>
                    <i className="flaticon-call-center" />
                    <RiCustomerService2Fill />
                    <span>24/7 Customer Support</span>
                  </li>
                </ul>
              </div>
            </div>
            <div className="col-sm-6 col-lg-5">
              <div className="right">
                <div className="inner">
                  <select className="nice-select">
                    <option className="option selected focus">$ USD</option>
                    <option className="option selected focus">EUR</option>
                    <option className="option selected focus">GBP</option>
                    <option className="option selected focus">CAD</option>
                  </select>
                </div>
                {/* <div className="inner">
                  <form>
                    <select className="nice-select">
                      <option>English</option>
                      <option>العربيّة</option>
                      <option>Deutsch</option>
                      <option>Português</option>
                      <option>简体中文</option>
                    </select>
                  </form>
                </div> */}
                <div className="inner">
                  <div className="call">
                    <FiPhoneCall style={{ color: "#fff" }} />
                    <Link to="tel:9905324980"> (+91) 98253 22522</Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="nav-top-area two">
        <div className="container-fluid">
          <div className="row align-items-center">
            <div className="col-lg-2">
              <div className="left">
                <Link to="/">
                  <img src={Logo} alt="Logo" />
                </Link>
              </div>
            </div>
            <div className="col-lg-5">
              <div className="middle">
                <form>
                  <div className="form-group">
                    {/* <div className="inner">
                      <select>
                        <option>All Categories</option>
                        <option>Vegetable</option>
                        <option>Fruits</option>
                        <option>Chicken</option>
                        <option>Chair</option>
                        <option>Table</option>
                        <option>Bed</option>
                        <option>Sofa</option>
                        <option>Headphones</option>
                        <option>Keyboard</option>
                        <option>MacBook</option>
                      </select>
                    </div> */}
                    <input
                      type="text"
                      className="form-control"
                      placeholder="Search Your Keywords"
                    />
                    <button type="submit" className="btn">
                      <i className="bx bx-search" />
                      <BsSearch />
                    </button>
                  </div>
                </form>
              </div>
            </div>
            <div className="col-lg-5">
              <div className="right">
                <ul>
                  <li>
                    <div className="inner">
                      <HiOutlineLocationMarker className="flaticon-pin" />
                      <Link to="#">Set Location</Link>
                    </div>
                  </li>
                  <li>
                    <div className="inner">
                      <IoIosHelpCircleOutline className="flaticon-question" />
                      <Link to="#">Need Help?</Link>
                    </div>
                  </li>
                  <li>
                    <button
                      type="button"
                      className="btn wishlist cart-popup-btn"
                      data-bs-toggle="modal"
                      data-bs-target="#exampleModal"
                      data-bs-whatever="@mdo"
                    >
                      <AiOutlineShoppingCart className="bx bxs-cart" />
                      <span>2</span>
                    </button>
                  </li>
                  {/* <li>
                    <button
                      type="button"
                      className="btn wishlist"
                      data-bs-toggle="modal"
                      data-bs-target="#exampleModalWishlist"
                      data-bs-whatever="@mdo"
                    >
                      <i className="bx bx-heart" />
                      <span>2</span>
                    </button>
                  </li> */}
                  <li>
                    <Link className="join" to="login.html">
                      <i />
                      <BiUserCircle className="flaticon-round-account-button-with-user-inside"></BiUserCircle>
                      Join
                    </Link>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="navbar-area sticky-top">
        {/* <div className="mobile-nav">
          <a to="index.html" className="logo">
            <img src="assets/images/logo-two.png" alt="Logo" />
          </a>
        </div> */}
        <div className="main-nav two">
          <div className="container-fluid">
            <nav className="navbar navbar-expand-md navbar-light">
              <div className="left">
                <select className="nice-select">
                  <option className="option selected focus">
                    All Categories
                  </option>
                  <option className="option selected focus">
                    Dash Complete Skate
                  </option>
                  <option className="option selected focus">
                    Rush 2.0 Complete Skate
                  </option>
                  <option className="option selected focus">
                    Fly Complete Skate
                  </option>
                  <option className="option selected focus">Boots</option>
                  <option className="option selected focus">Frames</option>
                  <option className="option selected focus">Wheels</option>
                  <option className="option selected focus">Bearings</option>
                  <option className="option selected focus">
                    Accessories{" "}
                  </option>
                  <option className="option selected focus">Apparels </option>
                  <option className="option selected focus">Helmet </option>
                </select>
              </div>

              <div
                className="collapse navbar-collapse mean-menu"
                id="navbarSupportedContent"
              >
                <ul className="navbar-nav">
                  <li className="nav-item">
                    <Link to="#" className="nav-link dropdown-toggle active">
                      Home <i className="bx bx-chevron-down" />
                    </Link>
                    <ul className="dropdown-menu">
                      <li className="nav-item">
                        <Link to="index.html" className="nav-link">
                          Home Demo One
                        </Link>
                      </li>
                      <li className="nav-item">
                        <Link to="index-2.html" className="nav-link active">
                          Home Demo Two
                        </Link>
                      </li>
                      <li className="nav-item">
                        <Link to="index-3.html" className="nav-link">
                          Home Demo Three
                        </Link>
                      </li>
                      <li className="nav-item">
                        <Link to="index-4.html" className="nav-link">
                          Home Demo Four (Revolution)
                        </Link>
                      </li>
                    </ul>
                  </li>
                  <li>
                    <div className="dropdown">
                      <button className="dropbtn">
                        About Us <AiOutlineDown />{" "}
                      </button>
                      <div className="dropdown-content">
                        <Link className="nav-link" to="#">
                          Our Story
                        </Link>
                        <Link className="nav-link" to="#">
                          Innovation
                        </Link>
                      </div>
                    </div>
                  </li>
                  <li>
                    <div className="dropdown">
                      <button className="dropbtn">
                        Media <AiOutlineDown />{" "}
                      </button>
                      <div className="dropdown-content">
                        <Link className="nav-link" to="#">
                          Photo Gallery
                        </Link>
                        <Link className="nav-link" to="#">
                          Video Gallery
                        </Link>
                        <Link className="nav-link" to="#">
                          News & Events
                        </Link>
                      </div>
                    </div>
                  </li>
                  <li>
                    <div className="dropdown">
                      <button className="dropbtn">
                        Supports <AiOutlineDown />{" "}
                      </button>
                      <div className="dropdown-content">
                        <Link className="nav-link" to="#">
                          FAQ
                        </Link>
                        <Link className="nav-link" to="#">
                          Size Chart
                        </Link>
                        <Link className="nav-link" to="#">
                          Semi Custom
                        </Link>
                        <Link className="nav-link" to="#">
                          Full Custom
                        </Link>
                        <Link className="nav-link" to="#">
                          Restoring & Reparing
                        </Link>
                        <Link className="nav-link" to="#">
                          Dealer Application
                        </Link>
                      </div>
                    </div>
                  </li>
                  <li>
                    <div className="dropdown">
                      <button className="dropbtn">
                        Contact <AiOutlineDown />{" "}
                      </button>
                      <div className="dropdown-content">
                        <Link className="nav-link" to="#">
                          Contact us
                        </Link>
                        <Link className="nav-link" to="#">
                          Global Dealers
                        </Link>
                      </div>
                    </div>
                  </li>
                </ul>
                <div className="side-nav two">
                  <h4>
                    Get <span>50%</span> Discount On Black Friday Offer{" "}
                    <Link to="#">View Products On Sale</Link>
                  </h4>
                </div>
              </div>
            </nav>
          </div>
        </div>
      </div>
      <HeaderVideo />
      <Offer />
      <Categories />
      <NewAraival />
      <BestProduct />
      <DealOfTheDay />
      <TrustableBrand />
      <BestSeling />
      <ClientTestimal />
      <Delivery />
      <Blog />
      <Footer />
    </React.Fragment>
  );
};
export default Hader;
