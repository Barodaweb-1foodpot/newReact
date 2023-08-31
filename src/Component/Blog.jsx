import React from "react";
import { AiOutlinePlus } from "react-icons/ai";
import { Link } from "react-router-dom";
import Blog1 from "./../assets/img/offer-1.jpg";
import Blog2 from "./../assets/img/offer-2.jpg";
import Blog3 from "./../assets/img/offer-3.jpg";

const Blog = () => {
  return (
    <React.Fragment>
      <section class="blog-area two pt-100 pb-70">
        <div class="container">
          <div class="section-title">
            <h2>Read Latest Our News</h2>
          </div>
          <div class="row justify-content-center">
            <div class="col-sm-6 col-lg-4">
              <div class="blog-item">
                <div class="top">
                  <Link to="blog-details.html">
                    <img src={Blog1} alt="Blog" />
                  </Link>
                  <span>26 Nov</span>
                </div>
                <div class="bottom">
                  <h3>
                    <Link to="blog-details.html">
                      Text Will Be Coming Soon...Text Will Be Coming Soon...Text
                    </Link>
                  </h3>
                  <p>
                    Text Will Be Coming Soon...Text Will Be Coming Soon...Text
                    Will Be Coming Soon...
                  </p>
                  <Link class="blog-btn" to="blog-details.html">
                    Read More
                    <span>
                      <i class="bx bx-plus">
                        <AiOutlinePlus />
                      </i>
                    </span>
                  </Link>
                </div>
              </div>
            </div>
            <div class="col-sm-6 col-lg-4">
              <div class="blog-item">
                <div class="top">
                  <Link to="#">
                    <img src={Blog2} alt="Blog" />
                  </Link>
                  <span>27 Nov</span>
                </div>
                <div class="bottom">
                  <h3>
                    <Link to="blog-details.html">
                      Text Will Be Coming Soon...Text Will Be Coming Soon...Text
                    </Link>
                  </h3>
                  <p>
                    Text Will Be Coming Soon...Text Will Be Coming Soon...Text
                    Will Be Coming Soon...
                  </p>
                  <Link class="blog-btn" to="#">
                    Read More
                    <span>
                      <i class="bx bx-plus">
                        <AiOutlinePlus />
                      </i>
                    </span>
                  </Link>
                </div>
              </div>
            </div>
            <div class="col-sm-6 col-lg-4">
              <div class="blog-item">
                <div class="top">
                  <Link to="#">
                    <img src={Blog3} alt="Blog" />
                  </Link>
                  <span>28 Nov</span>
                </div>
                <div class="bottom">
                  <h3>
                    <Link to="#">
                      Text Will Be Coming Soon...Text Will Be Coming Soon...Text
                    </Link>
                  </h3>
                  <p>
                    Text Will Be Coming Soon...Text Will Be Coming Soon...Text
                    Will Be Coming Soon...
                  </p>
                  <Link class="blog-btn" to="#">
                    Read More
                    <span>
                      <i class="bx bx-plus">
                        <AiOutlinePlus />
                      </i>
                    </span>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </React.Fragment>
  );
};
export default Blog;
