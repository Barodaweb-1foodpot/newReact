import React from "react";
import "./../css/NavBar.css";

const NavBar = () => {
  return (
    <React.Fragment>
      <div>
        {/* <div className="loader">
          <div className="d-table">
            <div className="d-table-cell">
              <div className="pre-load">
                <div className="inner one" />
                <div className="inner two" />
                <div className="inner three" />
              </div>
            </div>
          </div>
        </div> */}
        <div className="header-area two">
          <div className="container-fluid">
            <div className="row align-items-center">
              <div className="col-sm-6 col-lg-7">
                <div className="left">
                  <ul>
                    <li>
                      <i className="flaticon-delivery-truck" />
                      <span>Free Next Day Delivery*</span>
                    </li>
                    <li>
                      <i className="flaticon-quality" />
                      <span>Best Price Guarantee</span>
                    </li>
                    <li>
                      <i className="flaticon-call-center" />
                      <span>24/7 Customer Support</span>
                    </li>
                  </ul>
                </div>
              </div>
              <div className="col-sm-6 col-lg-5">
                <div className="right">
                  <div className="inner">
                    <select>
                      <option>$ USD</option>
                      <option>EUR</option>
                      <option>GBP</option>
                      <option>CAD</option>
                    </select>
                  </div>
                  <div className="inner">
                    <form>
                      <select>
                        <option>English</option>
                        <option>العربيّة</option>
                        <option>Deutsch</option>
                        <option>Português</option>
                        <option>简体中文</option>
                      </select>
                    </form>
                  </div>
                  <div className="inner">
                    <div className="call">
                      <i className="flaticon-phone-call" />
                      <a href="tel:9905324980">990-532-4980</a>
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
                  <a href="/">
                    <img src="assets/images/logo-two.png" alt="Logo" />
                  </a>
                </div>
              </div>
              <div className="col-lg-5">
                <div className="middle">
                  <form>
                    <div className="form-group">
                      <div className="inner">
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
                      </div>
                      <input
                        type="text"
                        className="form-control"
                        placeholder="Search Your Keywords"
                      />
                      <button type="submit" className="btn">
                        <i className="bx bx-search" />
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
                        <i className="flaticon-pin" />
                        <a href="#">Set Location</a>
                      </div>
                    </li>
                    <li>
                      <div className="inner">
                        <i className="flaticon-question" />
                        <a href="#">Need Help?</a>
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
                        <i className="bx bxs-cart" />
                        <span>2</span>
                      </button>
                    </li>
                    <li>
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
                    </li>
                    <li>
                      <a className="join" href="login.html">
                        <i className="flaticon-round-account-button-with-user-inside" />
                        Join
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="navbar-area sticky-top">
          <div className="mobile-nav">
            <a href="/" className="logo">
              <img src="assets/images/logo-two.png" alt="Logo" />
            </a>
          </div>
          <div className="main-nav two">
            <div className="container-fluid">
              <nav className="navbar navbar-expand-md navbar-light">
                <div className="left">
                  <select>
                    <option>All Categories</option>
                    <option>Chair</option>
                    <option>Table</option>
                    <option>Bed</option>
                    <option>Sofa</option>
                    <option>Headphones</option>
                    <option>Keyboard</option>
                    <option>MacBook</option>
                    <option>Vegetable</option>
                    <option>Fruits</option>
                    <option>Chicken</option>
                  </select>
                </div>
                <div
                  className="collapse navbar-collapse mean-menu"
                  id="navbarSupportedContent"
                >
                  <ul className="navbar-nav">
                    <li className="nav-item">
                      <a href="#" className="nav-link dropdown-toggle active">
                        Home <i className="bx bx-chevron-down" />
                      </a>
                      <ul className="dropdown-menu">
                        <li className="nav-item">
                          <a href="index.html" className="nav-link">
                            Home Demo One
                          </a>
                        </li>
                        <li className="nav-item">
                          <a href="index-2.html" className="nav-link active">
                            Home Demo Two
                          </a>
                        </li>
                        <li className="nav-item">
                          <a href="index-3.html" className="nav-link">
                            Home Demo Three
                          </a>
                        </li>
                        <li className="nav-item">
                          <a href="index-4.html" className="nav-link">
                            Home Demo Four (Revolution)
                          </a>
                        </li>
                      </ul>
                    </li>
                    <li className="nav-item">
                      <a href="#" className="nav-link dropdown-toggle">
                        Pages <i className="bx bx-chevron-down" />
                      </a>
                      <ul className="dropdown-menu">
                        <li className="nav-item">
                          <a href="#" className="nav-link dropdown-toggle">
                            Users <i className="bx bx-chevron-down" />
                          </a>
                          <ul className="dropdown-menu">
                            <li className="nav-item">
                              <a href="login.html" className="nav-link">
                                Login
                              </a>
                            </li>
                            <li className="nav-item">
                              <a href="register.html" className="nav-link">
                                Register
                              </a>
                            </li>
                          </ul>
                        </li>
                        <li className="nav-item">
                          <a href="faq.html" className="nav-link">
                            FAQ
                          </a>
                        </li>
                        <li className="nav-item">
                          <a href="404.html" className="nav-link">
                            404 Error Page
                          </a>
                        </li>
                        <li className="nav-item">
                          <a href="return-policy.html" className="nav-link">
                            Return Policy
                          </a>
                        </li>
                        <li className="nav-item">
                          <a href="privacy-policy.html" className="nav-link">
                            Privacy Policy
                          </a>
                        </li>
                        <li className="nav-item">
                          <a href="terms-conditions.html" className="nav-link">
                            Terms &amp; Conditions
                          </a>
                        </li>
                      </ul>
                    </li>
                    <li className="nav-item">
                      <a href="about.html" className="nav-link">
                        About Us
                      </a>
                    </li>
                    <li className="nav-item">
                      <a href="#" className="nav-link dropdown-toggle">
                        Blog <i className="bx bx-chevron-down" />
                      </a>
                      <ul className="dropdown-menu">
                        <li className="nav-item">
                          <a href="blog.html" className="nav-link">
                            Blog
                          </a>
                        </li>
                        <li className="nav-item">
                          <a
                            href="blog-right-sidebar.html"
                            className="nav-link"
                          >
                            Blog Right Sidebar
                          </a>
                        </li>
                        <li className="nav-item">
                          <a href="blog-left-sidebar.html" className="nav-link">
                            Blog Left Sidebar
                          </a>
                        </li>
                        <li className="nav-item">
                          <a href="blog-details.html" className="nav-link">
                            Blog Details
                          </a>
                        </li>
                      </ul>
                    </li>
                    <li className="nav-item">
                      <a href="#" className="nav-link dropdown-toggle">
                        Shop <i className="bx bx-chevron-down" />
                      </a>
                      <ul className="dropdown-menu">
                        <li className="nav-item">
                          <a href="shop.html" className="nav-link">
                            Shop
                          </a>
                        </li>
                        <li className="nav-item">
                          <a href="checkout.html" className="nav-link">
                            Checkout
                          </a>
                        </li>
                        <li className="nav-item">
                          <a href="single-product.html" className="nav-link">
                            Single Product
                          </a>
                        </li>
                        <li className="nav-item">
                          <a href="products-on-sale.html" className="nav-link">
                            Products On Sale
                          </a>
                        </li>
                        <li className="nav-item">
                          <a href="order-tracking.html" className="nav-link">
                            Order Tracking
                          </a>
                        </li>
                        <li className="nav-item">
                          <a href="customer-service.html" className="nav-link">
                            Customer Service
                          </a>
                        </li>
                      </ul>
                    </li>
                    <li className="nav-item">
                      <a href="contact.html" className="nav-link">
                        Contact
                      </a>
                    </li>
                  </ul>
                  <div className="side-nav two">
                    <h4>
                      Get <span>50%</span> Discount On Black Friday Offer{" "}
                      <a href="products-on-sale.html">View Products On Sale</a>
                    </h4>
                  </div>
                </div>
              </nav>
            </div>
          </div>
        </div>
        <div className="sale-area">
          <div className="container-fluid">
            <div className="row justify-content-center">
              <div className="col-sm-6 col-lg-4">
                <div className="sale-item sale-bg-one">
                  <img src="assets/images/sale-main1.png" alt="Sale" />
                  <div className="inner">
                    <h3>
                      <span className="percent">20%</span> Black Friday{" "}
                      <span>Sale</span>
                    </h3>
                    <p>On All Headphones</p>
                    <a href="#">Shop Now</a>
                  </div>
                </div>
              </div>
              <div className="col-sm-6 col-lg-4">
                <div className="sale-item sale-bg-two">
                  <img src="assets/images/sale-main2.png" alt="Sale" />
                  <div className="inner">
                    <h3>
                      <span className="percent">5%</span> Christmas{" "}
                      <span>Sale</span>
                    </h3>
                    <p>On All Smart Watch</p>
                    <a href="#">Shop Now</a>
                  </div>
                </div>
              </div>
              <div className="col-sm-6 col-lg-4">
                <div className="sale-item sale-bg-three">
                  <img src="assets/images/sale-main3.png" alt="Sale" />
                  <div className="inner">
                    <h3>
                      <span className="percent">10%</span> Winter{" "}
                      <span>Sale</span>
                    </h3>
                    <p>On All Cameras</p>
                    <a href="#">Shop Now</a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="products-area two pb-100">
          <div className="container">
            <div className="sorting-slider owl-theme owl-carousel">
              <div className="products-thumb">
                <a href="#">
                  <img src="assets/images/products/shape1.png" alt="Shape" />
                  <img src="assets/images/products/shape2.png" alt="Shape" />
                  <i className="flaticon-square" />
                  <span>All</span>
                </a>
              </div>
              <div className="products-thumb">
                <a href="#">
                  <img src="assets/images/products/shape1.png" alt="Shape" />
                  <img src="assets/images/products/shape2.png" alt="Shape" />
                  <i className="flaticon-headphones" />
                  <span>Headphones</span>
                </a>
              </div>
              <div className="products-thumb">
                <a href="#">
                  <img src="assets/images/products/shape1.png" alt="Shape" />
                  <img src="assets/images/products/shape2.png" alt="Shape" />
                  <i className="flaticon-microphone" />
                  <span>Microphones</span>
                </a>
              </div>
              <div className="products-thumb">
                <a href="#">
                  <img src="assets/images/products/shape1.png" alt="Shape" />
                  <img src="assets/images/products/shape2.png" alt="Shape" />
                  <i className="flaticon-laptop" />
                  <span>Laptop</span>
                </a>
              </div>
              <div className="products-thumb">
                <a href="#">
                  <img src="assets/images/products/shape1.png" alt="Shape" />
                  <img src="assets/images/products/shape2.png" alt="Shape" />
                  <i className="flaticon-monitor" />
                  <span>Desktop</span>
                </a>
              </div>
              <div className="products-thumb">
                <a href="#">
                  <img src="assets/images/products/shape1.png" alt="Shape" />
                  <img src="assets/images/products/shape2.png" alt="Shape" />
                  <i className="flaticon-camera" />
                  <span>Camera</span>
                </a>
              </div>
              <div className="products-thumb">
                <a href="#">
                  <img src="assets/images/products/shape1.png" alt="Shape" />
                  <img src="assets/images/products/shape2.png" alt="Shape" />
                  <i className="flaticon-smartwatch" />
                  <span>Smart Watch</span>
                </a>
              </div>
            </div>
            <div className="row">
              <div className="col-sm-6 col-lg-3">
                <div className="products-item">
                  <div className="top">
                    <a className="wishlist" href="#">
                      <i className="bx bx-heart" />
                    </a>
                    <img
                      src="assets/images/products/products14.png"
                      alt="Products"
                    />
                    <div className="inner">
                      <h3>
                        <a href="single-product.html">Red AKG Headphones</a>
                      </h3>
                      <span>$200.00</span>
                    </div>
                  </div>
                  <div className="bottom">
                    <a className="cart-text" href="#">
                      Add To Cart
                    </a>
                    <i className="bx bx-plus" />
                  </div>
                </div>
              </div>
              <div className="col-sm-6 col-lg-3">
                <div className="products-item">
                  <div className="top">
                    <a className="wishlist" href="#">
                      <i className="bx bx-heart" />
                    </a>
                    <img
                      src="assets/images/products/products15.png"
                      alt="Products"
                    />
                    <div className="inner">
                      <h3>
                        <a href="single-product.html">
                          Corsair Gaming Keyboard
                        </a>
                      </h3>
                      <span>$180.00</span>
                    </div>
                  </div>
                  <div className="bottom">
                    <a className="cart-text" href="#">
                      Add To Cart
                    </a>
                    <i className="bx bx-plus" />
                  </div>
                </div>
              </div>
              <div className="col-sm-6 col-lg-3">
                <div className="products-item">
                  <div className="top">
                    <a className="wishlist" href="#">
                      <i className="bx bx-heart" />
                    </a>
                    <img
                      src="assets/images/products/products16.png"
                      alt="Products"
                    />
                    <div className="inner">
                      <h3>
                        <a href="single-product.html">
                          Apple MacBook Air 13.3-Inch
                        </a>
                      </h3>
                      <span>$170.00</span>
                    </div>
                  </div>
                  <div className="bottom">
                    <a className="cart-text" href="#">
                      Add To Cart
                    </a>
                    <i className="bx bx-plus" />
                  </div>
                </div>
              </div>
              <div className="col-sm-6 col-lg-3">
                <div className="products-item">
                  <div className="top">
                    <a className="wishlist" href="#">
                      <i className="bx bx-heart" />
                    </a>
                    <img
                      src="assets/images/products/products17.png"
                      alt="Products"
                    />
                    <div className="inner">
                      <h3>
                        <a href="single-product.html">
                          Apple iMac 27", Core i5
                        </a>
                      </h3>
                      <span>$190.00</span>
                    </div>
                  </div>
                  <div className="bottom">
                    <a className="cart-text" href="#">
                      Add To Cart
                    </a>
                    <i className="bx bx-plus" />
                  </div>
                </div>
              </div>
              <div className="col-sm-6 col-lg-3">
                <div className="products-item">
                  <div className="top">
                    <a className="wishlist" href="#">
                      <i className="bx bx-heart" />
                    </a>
                    <img
                      src="assets/images/products/products18.png"
                      alt="Products"
                    />
                    <div className="inner">
                      <h3>
                        <a href="single-product.html">
                          Canon EF-S 18-55mm Lens
                        </a>
                      </h3>
                      <span>$160.00</span>
                    </div>
                  </div>
                  <div className="bottom">
                    <a className="cart-text" href="#">
                      Add To Cart
                    </a>
                    <i className="bx bx-plus" />
                  </div>
                </div>
              </div>
              <div className="col-sm-6 col-lg-3">
                <div className="products-item">
                  <div className="top">
                    <a className="wishlist" href="#">
                      <i className="bx bx-heart" />
                    </a>
                    <img
                      src="assets/images/products/products19.png"
                      alt="Products"
                    />
                    <div className="inner">
                      <h3>
                        <a href="single-product.html">A4 Tech Bloody G520S</a>
                      </h3>
                      <span>$120.00</span>
                    </div>
                  </div>
                  <div className="bottom">
                    <a className="cart-text" href="#">
                      Add To Cart
                    </a>
                    <i className="bx bx-plus" />
                  </div>
                </div>
              </div>
              <div className="col-sm-6 col-lg-3">
                <div className="products-item">
                  <div className="top">
                    <a className="wishlist" href="#">
                      <i className="bx bx-heart" />
                    </a>
                    <img
                      src="assets/images/products/products20.png"
                      alt="Products"
                    />
                    <div className="inner">
                      <h3>
                        <a href="single-product.html">Havit AM100 Microphone</a>
                      </h3>
                      <span>$250.00</span>
                    </div>
                  </div>
                  <div className="bottom">
                    <a className="cart-text" href="#">
                      Add To Cart
                    </a>
                    <i className="bx bx-plus" />
                  </div>
                </div>
              </div>
              <div className="col-sm-6 col-lg-3">
                <div className="products-item">
                  <div className="top">
                    <a className="wishlist" href="#">
                      <i className="bx bx-heart" />
                    </a>
                    <img
                      src="assets/images/products/products21.png"
                      alt="Products"
                    />
                    <div className="inner">
                      <h3>
                        <a href="single-product.html">Canon Eos 4000D Camera</a>
                      </h3>
                      <span>$210.00</span>
                    </div>
                  </div>
                  <div className="bottom">
                    <a className="cart-text" href="#">
                      Add To Cart
                    </a>
                    <i className="bx bx-plus" />
                  </div>
                </div>
              </div>
            </div>
            <div className="text-center">
              <a className="common-btn two" href="shop.html">
                Load More Products
                <img src="assets/images/shape1.png" alt="Shape" />
                <img src="assets/images/shape2.png" alt="Shape" />
              </a>
            </div>
          </div>
        </div>
        <div className="buy-area two ptb-100">
          <div className="buy-shape">
            <img src="assets/images/shape6.png" alt="Shape" />
            <img src="assets/images/shape7.png" alt="Shape" />
          </div>
          <div className="container">
            <div className="row align-items-center">
              <div className="col-lg-6">
                <div className="buy-content">
                  <h2>Buy Best Electronics At A Cheaper Rate</h2>
                  <p>Green AKG Bluetooth Headphones</p>
                  <ul>
                    <li>$160.00</li>
                    <li>
                      <del>$200.00</del>
                    </li>
                  </ul>
                  <a className="common-btn two" href="shop.html">
                    Shop Now
                    <img src="assets/images/shape1.png" alt="Shape" />
                    <img src="assets/images/shape2.png" alt="Shape" />
                  </a>
                </div>
              </div>
              <div className="col-lg-6">
                <div className="buy-img">
                  <img src="assets/images/buy-main2.png" alt="Buy" />
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="deal-area pt-100 pb-70">
          <div className="container">
            <div className="row">
              <div className="col-lg-6">
                <div className="section-title">
                  <h2>Deal Of The Day</h2>
                </div>
                <div className="deal-item">
                  <span className="percent">-20%</span>
                  <a className="deal-btn" href="single-product.html">
                    <i className="bx bx-right-arrow-alt" />
                  </a>
                  <div className="inner align-items-center">
                    <div className="left">
                      <img src="assets/images/deal-main1.png" alt="Deal" />
                    </div>
                    <div className="right">
                      <ul className="reviews">
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
                      </ul>
                      <h3>Best Bionic Thunder Headphones</h3>
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
                        <li>High Quality Sound</li>
                        <li>Voice Cancellation</li>
                        <li>Mobile Support</li>
                        <li>3+ Years Warranty</li>
                      </ul>
                      <ul className="timer">
                        <li>
                          <div className="timer-inner">
                            <span id="days" />
                            <p>Days</p>
                          </div>
                        </li>
                        <li>
                          <div className="timer-inner">
                            <span id="hours" />
                            <p>Hrs</p>
                          </div>
                        </li>
                        <li>
                          <div className="timer-inner">
                            <span id="minutes" />
                            <p>Mins</p>
                          </div>
                        </li>
                        <li>
                          <div className="timer-inner">
                            <span id="seconds" />
                            <p>Secs</p>
                          </div>
                        </li>
                      </ul>
                      <ul className="cart-wishlist">
                        <li>
                          <a href="#">
                            <i className="bx bxs-cart" />
                          </a>
                        </li>
                        <li>
                          <a href="#">
                            <i className="bx bxs-heart" />
                          </a>
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
                  <a className="deal-btn" href="single-product.html">
                    <i className="bx bx-right-arrow-alt" />
                  </a>
                  <div className="inner align-items-center">
                    <div className="left">
                      <img src="assets/images/deal-main2.png" alt="Deal" />
                    </div>
                    <div className="right">
                      <ul className="reviews">
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
                      </ul>
                      <h3>Bionic Thunder Smart Watch</h3>
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
                          <a href="#">
                            <i className="bx bxs-cart" />
                          </a>
                        </li>
                        <li>
                          <a href="#">
                            <i className="bx bxs-heart" />
                          </a>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
                <div className="deal-black">
                  <img src="assets/images/deal-shape1.png" alt="Shape" />
                  <h3>50% Black Friday Sale</h3>
                  <a href="shop.html">View Products</a>
                </div>
              </div>
            </div>
          </div>
        </div>
        <section className="brand-area pb-70">
          <div className="container">
            <div className="section-title">
              <h2>Our Trusted Brand</h2>
            </div>
            <div className="row justify-content-center">
              <div className="col-sm-4 col-lg-3">
                <div className="brand-item">
                  <a href="#">
                    <img src="assets/images/brand/brand1.png" alt="Brand" />
                  </a>
                </div>
              </div>
              <div className="col-sm-4 col-lg-3">
                <div className="brand-item">
                  <a href="#">
                    <img src="assets/images/brand/brand2.png" alt="Brand" />
                  </a>
                </div>
              </div>
              <div className="col-sm-4 col-lg-3">
                <div className="brand-item">
                  <a href="#">
                    <img src="assets/images/brand/brand3.png" alt="Brand" />
                  </a>
                </div>
              </div>
              <div className="col-sm-4 col-lg-3">
                <div className="brand-item">
                  <a href="#">
                    <img src="assets/images/brand/brand4.png" alt="Brand" />
                  </a>
                </div>
              </div>
              <div className="col-sm-4 col-lg-3">
                <div className="brand-item">
                  <a href="#">
                    <img src="assets/images/brand/brand5.png" alt="Brand" />
                  </a>
                </div>
              </div>
              <div className="col-sm-4 col-lg-3">
                <div className="brand-item">
                  <a href="#">
                    <img src="assets/images/brand/brand6.png" alt="Brand" />
                  </a>
                </div>
              </div>
              <div className="col-sm-4 col-lg-3">
                <div className="brand-item">
                  <a href="#">
                    <img src="assets/images/brand/brand7.png" alt="Brand" />
                  </a>
                </div>
              </div>
            </div>
          </div>
        </section>
        <div className="products-area two pb-70">
          <div className="container">
            <div className="section-title">
              <h2>Best Selling Products</h2>
            </div>
            <div className="row">
              <div className="col-sm-6 col-lg-3">
                <div className="products-item">
                  <div className="top">
                    <a className="wishlist" href="#">
                      <i className="bx bx-heart" />
                    </a>
                    <img
                      src="assets/images/products/products22.png"
                      alt="Products"
                    />
                    <div className="inner">
                      <h3>
                        <a href="single-product.html">
                          Bionic Thunder Headphones
                        </a>
                      </h3>
                      <span>$200.00</span>
                    </div>
                  </div>
                  <div className="bottom">
                    <a className="cart-text" href="#">
                      Add To Cart
                    </a>
                    <i className="bx bx-plus" />
                  </div>
                </div>
              </div>
              <div className="col-sm-6 col-lg-3">
                <div className="products-item">
                  <div className="top">
                    <a className="wishlist" href="#">
                      <i className="bx bx-heart" />
                    </a>
                    <img
                      src="assets/images/products/products23.png"
                      alt="Products"
                    />
                    <div className="inner">
                      <h3>
                        <a href="single-product.html">
                          Xiaomi A1821 Smart Watch
                        </a>
                      </h3>
                      <span>$180.00</span>
                    </div>
                  </div>
                  <div className="bottom">
                    <a className="cart-text" href="#">
                      Add To Cart
                    </a>
                    <i className="bx bx-plus" />
                  </div>
                </div>
              </div>
              <div className="col-sm-6 col-lg-3">
                <div className="products-item">
                  <div className="top">
                    <a className="wishlist" href="#">
                      <i className="bx bx-heart" />
                    </a>
                    <img
                      src="assets/images/products/products24.png"
                      alt="Products"
                    />
                    <div className="inner">
                      <h3>
                        <a href="single-product.html">
                          Nikon D5600 DSLR Camera
                        </a>
                      </h3>
                      <span>$170.00</span>
                    </div>
                  </div>
                  <div className="bottom">
                    <a className="cart-text" href="#">
                      Add To Cart
                    </a>
                    <i className="bx bx-plus" />
                  </div>
                </div>
              </div>
              <div className="col-sm-6 col-lg-3">
                <div className="products-item">
                  <div className="top">
                    <a className="wishlist" href="#">
                      <i className="bx bx-heart" />
                    </a>
                    <img
                      src="assets/images/products/products25.png"
                      alt="Products"
                    />
                    <div className="inner">
                      <h3>
                        <a href="single-product.html">Delux OM02 Keyboard</a>
                      </h3>
                      <span>$190.00</span>
                    </div>
                  </div>
                  <div className="bottom">
                    <a className="cart-text" href="#">
                      Add To Cart
                    </a>
                    <i className="bx bx-plus" />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="testimonials-area two pb-100">
          <div className="container">
            <div className="section-title">
              <h2>Our Client Testimonials</h2>
            </div>
            <div className="testimonials-slider owl-theme owl-carousel">
              <div className="testimonials-item">
                <i className="flaticon-quote" />
                <p>
                  Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed
                  diam nonumy eirmod tempor invidunt ut labore et dolore magna
                  aliquyam erat, sed diam volu ptua
                </p>
                <h3>Adam Smith</h3>
                <span>Co-Founder Of Company</span>
                <img src="assets/images/testimonial1.jpg" alt="Testimonial" />
              </div>
              <div className="testimonials-item">
                <i className="flaticon-quote" />
                <p>
                  It is a long established fact that a reader will be distracted
                  by the readable content of a page when looking at its layout.
                  The point of using Lorem Ipsum
                </p>
                <h3>Jonathon Ronan</h3>
                <span>Director Of Company</span>
                <img src="assets/images/testimonial2.jpg" alt="Testimonial" />
              </div>
              <div className="testimonials-item">
                <i className="flaticon-quote" />
                <p>
                  Contrary to popular belief, Lorem Ipsum is not simply random
                  text. It has roots in a piece of classical Latin literature
                  from 45 BC, making it over 2000 years old
                </p>
                <h3>Sarp Cesmeli</h3>
                <span>Engineer Of Company</span>
                <img src="assets/images/testimonial3.jpg" alt="Testimonial" />
              </div>
              <div className="testimonials-item">
                <i className="flaticon-quote" />
                <p>
                  There are many variations of passages of Lorem Ipsum
                  available, but the majority have suffered alteration in some
                  form, by injected humour, or randomised words{" "}
                </p>
                <h3>Tom Henry</h3>
                <span>Staff Of Company</span>
                <img src="assets/images/testimonial4.jpg" alt="Testimonial" />
              </div>
            </div>
          </div>
        </div>
        <div className="support-area pt-100 pb-70">
          <div className="container">
            <div className="row justify-content-center">
              <div className="col-sm-6 col-lg-4">
                <div className="support-item two">
                  <i className="flaticon-free-delivery" />
                  <h3>Free Next Day Delivery</h3>
                  <p>
                    Lorem ipsum dolor sit amet, cons etetur sadipscing elitr
                  </p>
                  <img src="assets/images/support-shape1.png" alt="Shape" />
                </div>
              </div>
              <div className="col-sm-6 col-lg-4">
                <div className="support-item three">
                  <i className="flaticon-call-center" />
                  <h3>24/7 Online Support</h3>
                  <p>
                    Lorem ipsum dolor sit amet, cons etetur sadipscing elitr
                  </p>
                  <img src="assets/images/support-shape1.png" alt="Shape" />
                </div>
              </div>
              <div className="col-sm-6 col-lg-4">
                <div className="support-item four">
                  <i className="flaticon-giftbox" />
                  <h3>Weekly Gift Voucher</h3>
                  <p>
                    Lorem ipsum dolor sit amet, cons etetur sadipscing elitr
                  </p>
                  <img src="assets/images/support-shape1.png" alt="Shape" />
                </div>
              </div>
            </div>
          </div>
        </div>
        <section className="blog-area two pt-100 pb-70">
          <div className="container">
            <div className="section-title">
              <h2>Read Latest Our News</h2>
            </div>
            <div className="row justify-content-center">
              <div className="col-sm-6 col-lg-4">
                <div className="blog-item">
                  <div className="top">
                    <a href="blog-details.html">
                      <img src="assets/images/blog/blog4.jpg" alt="Blog" />
                    </a>
                    <span>26 Nov</span>
                  </div>
                  <div className="bottom">
                    <h3>
                      <a href="blog-details.html">
                        How To Choose The Best Smartphone For Your Daily Task?
                      </a>
                    </h3>
                    <p>
                      Lorem ipsum dolor sit amet consectetur adipisicing elit.
                      Quia recusandae praesentium dolor atque debitis aspernatur
                      quaerat
                    </p>
                    <a className="blog-btn" href="blog-details.html">
                      Read More
                      <i className="bx bx-plus" />
                    </a>
                  </div>
                </div>
              </div>
              <div className="col-sm-6 col-lg-4">
                <div className="blog-item">
                  <div className="top">
                    <a href="blog-details.html">
                      <img src="assets/images/blog/blog5.jpg" alt="Blog" />
                    </a>
                    <span>27 Nov</span>
                  </div>
                  <div className="bottom">
                    <h3>
                      <a href="blog-details.html">
                        How Does This VR Box Help In Children's Online
                        Education?
                      </a>
                    </h3>
                    <p>
                      Lorem ipsum dolor sit amet consectetur adipisicing elit.
                      Quia recusandae praesentium dolor atque debitis aspernatur
                      quaerat
                    </p>
                    <a className="blog-btn" href="blog-details.html">
                      Read More
                      <i className="bx bx-plus" />
                    </a>
                  </div>
                </div>
              </div>
              <div className="col-sm-6 col-lg-4">
                <div className="blog-item">
                  <div className="top">
                    <a href="blog-details.html">
                      <img src="assets/images/blog/blog6.jpg" alt="Blog" />
                    </a>
                    <span>28 Nov</span>
                  </div>
                  <div className="bottom">
                    <h3>
                      <a href="blog-details.html">
                        Find Out The Top Gaming Laptops Within The Best Pricing!
                      </a>
                    </h3>
                    <p>
                      Lorem ipsum dolor sit amet consectetur adipisicing elit.
                      Quia recusandae praesentium dolor atque debitis aspernatur
                      quaerat
                    </p>
                    <a className="blog-btn" href="blog-details.html">
                      Read More
                      <i className="bx bx-plus" />
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        <footer className="footer-area two pt-100 pb-70">
          <div className="footer-shape">
            <img src="assets/images/shape8.png" alt="Shape" />
            <img src="assets/images/shape9.png" alt="Shape" />
          </div>
          <div className="container">
            <div className="row justify-content-center">
              <div className="col-sm-6 col-lg-4">
                <div className="footer-item">
                  <div className="footer-logo">
                    <a className="logo" href="index.html">
                      <img src="assets/images/logo-two.png" alt="Logo" />
                    </a>
                    <ul>
                      <li>
                        <i className="flaticon-pin" />
                        <a href="#">2750 Quadra Street, Victoria, Canada</a>
                        <a href="#">345-659 Birmingham Street, England</a>
                      </li>
                      <li>
                        <i className="flaticon-phone-call" />
                        <a href="tel:+9908314326">+990-831-4326</a>
                        <a href="tel:+5465486325">+546-548-6325</a>
                      </li>
                      <li>
                        <i className="flaticon-email" />
                        <a href="https://templates.hibootstrap.com/cdn-cgi/l/email-protection#4d25282121220d282e223d632e2220">
                          <span
                            className="__cf_email__"
                            data-cfemail="f199949d9d9eb194929e81df929e9c"
                          >
                            [email&nbsp;protected]
                          </span>
                        </a>
                        <a href="https://templates.hibootstrap.com/cdn-cgi/l/email-protection#6900070f06290c0a0619470a0604">
                          <span
                            className="__cf_email__"
                            data-cfemail="157c7b737a5570767a653b767a78"
                          >
                            [email&nbsp;protected]
                          </span>
                        </a>
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
                        <a href="return-policy.html">Return Policy</a>
                      </li>
                      <li>
                        <a href="faq.html">FAQ</a>
                      </li>
                      <li>
                        <a href="single-product.html">Single Product</a>
                      </li>
                      <li>
                        <a href="order-tracking.html">Order Tracking</a>
                      </li>
                      <li>
                        <a href="privacy-policy.html">Privacy Policy</a>
                      </li>
                      <li>
                        <a href="contact.html">Contact Us</a>
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
                            <a href="about.html">About Us</a>
                          </li>
                          <li>
                            <a href="blog.html">Blog</a>
                          </li>
                          <li>
                            <a href="#">Wishlist</a>
                          </li>
                          <li>
                            <a href="#">Checkout</a>
                          </li>
                          <li>
                            <a href="shop.html">Shop</a>
                          </li>
                          <li>
                            <a href="login.html">My Account</a>
                          </li>
                        </ul>
                      </div>
                      <div className="col-6 col-sm-4 col-lg-4">
                        <ul>
                          <li>
                            <a href="#">Cameras</a>
                          </li>
                          <li>
                            <a href="#">Laptops</a>
                          </li>
                          <li>
                            <a href="#">Headphones</a>
                          </li>
                          <li>
                            <a href="#">Smartwatch</a>
                          </li>
                          <li>
                            <a href="#">Microphones</a>
                          </li>
                          <li>
                            <a href="#">Computers</a>
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
                      <a href="#" target="_blank">
                        <img src="assets/images/payment1.png" alt="Payment" />
                      </a>
                    </li>
                    <li>
                      <a href="#" target="_blank">
                        <img src="assets/images/payment2.png" alt="Payment" />
                      </a>
                    </li>
                    <li>
                      <a href="#" target="_blank">
                        <img src="assets/images/payment3.png" alt="Payment" />
                      </a>
                    </li>
                    <li>
                      <a href="#" target="_blank">
                        <img src="assets/images/payment4.png" alt="Payment" />
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
              <div className="col-sm-6 col-lg-6">
                <div className="social-links">
                  <ul>
                    <li>
                      <a href="#" target="_blank">
                        <i className="bx bxl-facebook" />
                      </a>
                    </li>
                    <li>
                      <a href="#" target="_blank">
                        <i className="bx bxl-twitter" />
                      </a>
                    </li>
                    <li>
                      <a href="#" target="_blank">
                        <i className="bx bxl-linkedin" />
                      </a>
                    </li>
                    <li>
                      <a href="#" target="_blank">
                        <i className="bx bxl-skype" />
                      </a>
                    </li>
                    <li>
                      <a href="#" target="_blank">
                        <i className="bx bxl-youtube" />
                      </a>
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
                Copyright ©2020 Design &amp; Developed by{" "}
                <a href="https://hibootstrap.com/" target="_blank">
                  HiBootstrap
                </a>
              </p>
            </div>
          </div>
        </div>
        <div
          className="modal fade modal-right popup-modal"
          id="exampleModal"
          tabIndex={-1}
          aria-hidden="true"
        >
          <div className="modal-dialog">
            <div className="modal-content">
              <div className="modal-header">
                <h2>
                  Shopping Cart <span>02 Items</span>
                </h2>
                <button
                  type="button"
                  className="btn-close"
                  data-bs-dismiss="modal"
                  aria-label="Close"
                />
              </div>
              <div className="modal-body">
                <div className="cart-table">
                  <table className="table">
                    <tbody>
                      <tr>
                        <th scope="row">
                          <img src="assets/images/cart/cart1.png" alt="Cart" />
                        </th>
                        <td>
                          <h3>White Comfy Stool</h3>
                          <span className="rate">$200.00 x 1</span>
                        </td>
                        <td>
                          <ul className="number">
                            <li>
                              <span className="minus">-</span>
                              <input type="text" defaultValue={1} />
                              <span className="plus">+</span>
                            </li>
                          </ul>
                        </td>
                        <td>
                          <a className="close" href="#">
                            <i className="bx bx-x" />
                          </a>
                        </td>
                      </tr>
                      <tr>
                        <th scope="row">
                          <img src="assets/images/cart/cart2.png" alt="Cart" />
                        </th>
                        <td>
                          <h3>Yellow Armchair</h3>
                          <span className="rate">$180.00 x 1</span>
                        </td>
                        <td>
                          <ul className="number">
                            <li>
                              <span className="minus">-</span>
                              <input type="text" defaultValue={1} />
                              <span className="plus">+</span>
                            </li>
                          </ul>
                        </td>
                        <td>
                          <a className="close" href="#">
                            <i className="bx bx-x" />
                          </a>
                        </td>
                      </tr>
                    </tbody>
                  </table>
                  <div className="total-amount">
                    <h3>
                      Total: <span>$380.00</span>
                    </h3>
                  </div>
                </div>
              </div>
              <div className="modal-footer">
                <form>
                  <input
                    type="text"
                    className="form-control"
                    placeholder="Enter Coupon Code"
                  />
                  <button type="submit" className="btn common-btn">
                    Proceed To Checkout
                    <img src="assets/images/shape1.png" alt="Shape" />
                    <img src="assets/images/shape2.png" alt="Shape" />
                  </button>
                </form>
              </div>
            </div>
          </div>
        </div>
        <div
          className="modal fade modal-right popup-modal wishlist-modal"
          id="exampleModalWishlist"
          tabIndex={-1}
          aria-hidden="true"
        >
          <div className="modal-dialog">
            <div className="modal-content">
              <div className="modal-header">
                <h2>
                  Wishlist <span>02 Items</span>
                </h2>
                <button
                  type="button"
                  className="btn-close"
                  data-bs-dismiss="modal"
                  aria-label="Close"
                />
              </div>
              <div className="modal-body">
                <div className="cart-table">
                  <table className="table">
                    <tbody>
                      <tr>
                        <th scope="row">
                          <img src="assets/images/cart/cart1.png" alt="Cart" />
                        </th>
                        <td>
                          <h3>White Comfy Stool</h3>
                          <span className="rate">$200.00 x 1</span>
                        </td>
                        <td>
                          <a className="common-btn" href="shop.html">
                            Add To Cart
                            <img src="assets/images/shape1.png" alt="Shape" />
                            <img src="assets/images/shape2.png" alt="Shape" />
                          </a>
                        </td>
                        <td>
                          <a className="close" href="#">
                            <i className="bx bx-x" />
                          </a>
                        </td>
                      </tr>
                      <tr>
                        <th scope="row">
                          <img src="assets/images/cart/cart2.png" alt="Cart" />
                        </th>
                        <td>
                          <h3>Yellow Armchair</h3>
                          <span className="rate">$180.00 x 1</span>
                        </td>
                        <td>
                          <a className="common-btn" href="shop.html">
                            Add To Cart
                            <img src="assets/images/shape1.png" alt="Shape" />
                            <img src="assets/images/shape2.png" alt="Shape" />
                          </a>
                        </td>
                        <td>
                          <a className="close" href="#">
                            <i className="bx bx-x" />
                          </a>
                        </td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </React.Fragment>
  );
};
export default NavBar;
