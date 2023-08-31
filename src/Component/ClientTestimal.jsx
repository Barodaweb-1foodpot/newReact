import React from "react";
import { FaQuoteRight } from "react-icons/fa";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import Testimal from "./../assets/img/testimonial2.jpg";

const ClientTestimal = () => {
  const responsive = {
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 3,
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 2,
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1,
    },
  };
  return (
    <React.Fragment>
      <div className="testimonials-area two pb-100">
        <div className="container">
          <div className="section-title">
            <h2>Our Client Testimonials</h2>
          </div>
          <div className="testimonials-slider owl-theme owl-carousel">
            <Carousel responsive={responsive}>
              <div className="testimonials-item">
                <i className="flaticon-quote">
                  <FaQuoteRight />{" "}
                </i>
                <p>
                  Text Will Be Coming Soon...Text Will Be Coming Soon...Text
                  Text Will Be Coming Soon...Text Will Be Coming Soon...Text
                  Text Will Be Coming Soon...Text Will Be Coming Soon...Text
                </p>
                <h3>Title</h3>
                <span>Co-Founder Of Company</span>
                <img src={Testimal} alt="Testimonial" />
              </div>
              <div className="testimonials-item">
                <i className="flaticon-quote">
                  <FaQuoteRight />{" "}
                </i>
                <p>
                  Text Will Be Coming Soon...Text Will Be Coming Soon...Text
                  Text Will Be Coming Soon...Text Will Be Coming Soon...Text
                  Text Will Be Coming Soon...Text Will Be Coming Soon...Text
                </p>
                <h3>Title</h3>
                <span>Director Of Company</span>
                <img src={Testimal} alt="Testimonial" />
              </div>
              <div className="testimonials-item">
                <i className="flaticon-quote">
                  <FaQuoteRight />{" "}
                </i>
                <p>
                  Text Will Be Coming Soon...Text Will Be Coming Soon...Text
                  Text Will Be Coming Soon...Text Will Be Coming Soon...Text
                  Text Will Be Coming Soon...Text Will Be Coming Soon...Text
                </p>
                <h3>Title</h3>
                <span>Engineer Of Company</span>
                <img src={Testimal} alt="Testimonial" />
              </div>
              <div className="testimonials-item">
                <i className="flaticon-quote">
                  <FaQuoteRight />{" "}
                </i>
                <p>
                  Text Will Be Coming Soon...Text Will Be Coming Soon...Text
                  Text Will Be Coming Soon...Text Will Be Coming Soon...Text
                  Text Will Be Coming Soon...Text Will Be Coming Soon...Text
                </p>
                <h3>Title</h3>
                <span>Staff Of Company</span>
                <img src={Testimal} alt="Testimonial" />
              </div>
              <div className="testimonials-item">
                <i className="flaticon-quote">
                  <FaQuoteRight />{" "}
                </i>
                <p>
                  Text Will Be Coming Soon...Text Will Be Coming Soon...Text
                  Text Will Be Coming Soon...Text Will Be Coming Soon...Text
                  Text Will Be Coming Soon...Text Will Be Coming Soon...Text
                </p>
                <h3>Title</h3>
                <span>Staff Of Company</span>
                <img src={Testimal} alt="Testimonial" />
              </div>
              <div className="testimonials-item">
                <i className="flaticon-quote">
                  <FaQuoteRight />{" "}
                </i>
                <p>
                  Text Will Be Coming Soon...Text Will Be Coming Soon...Text
                  Text Will Be Coming Soon...Text Will Be Coming Soon...Text
                  Text Will Be Coming Soon...Text Will Be Coming Soon...Text
                  Text Will Be Coming Soon...Text Will Be Coming Soon...Text
                </p>
                <h3>Title</h3>
                <span>Staff Of Company</span>
                <img src={Testimal} alt="Testimonial" />
              </div>
              <div className="testimonials-item">
                <i className="flaticon-quote">
                  <FaQuoteRight />{" "}
                </i>
                <p>
                  Text Will Be Coming Soon...Text Will Be Coming Soon...Text
                  Text Will Be Coming Soon...Text Will Be Coming Soon...Text
                  Text Will Be Coming Soon...Text Will Be Coming Soon...Text
                </p>
                <h3>Title</h3>
                <span>Staff Of Company</span>
                <img src={Testimal} alt="Testimonial" />
              </div>
              <div className="testimonials-item">
                <i className="flaticon-quote" />
                <p>
                  Text Will Be Coming Soon...Text Will Be Coming Soon...Text
                  Text Will Be Coming Soon...Text Will Be Coming Soon...Text
                  Text Will Be Coming Soon...Text Will Be Coming Soon...Text
                </p>
                <h3>Title</h3>
                <span>Staff Of Company</span>
                <img src={Testimal} alt="Testimonial" />
              </div>
            </Carousel>
          </div>
        </div>
      </div>
    </React.Fragment>
  );
};
export default ClientTestimal;
