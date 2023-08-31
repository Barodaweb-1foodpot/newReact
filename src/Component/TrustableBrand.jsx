import React from "react";
import { Link } from "react-router-dom";
import Brand1 from "./../assets/img/client-1.png";
import Brand2 from "./../assets/img/client-2.png";
import Brand3 from "./../assets/img/client-3.png";
import Brand4 from "./../assets/img/client-4.png";

const TrustableBrand = () => {
  return (
    <React.Fragment>
      <section className="brand-area pb-70">
        <div className="container">
          <div className="section-title">
            <h2>Our Trusted Brand</h2>
          </div>
          <div className="row justify-content-center">
            <div className="col-sm-4 col-lg-3">
              <div className="brand-item">
                <Link to="#">
                  <img src={Brand1} alt="Brand" />
                </Link>
              </div>
            </div>
            <div className="col-sm-4 col-lg-3">
              <div className="brand-item">
                <Link to="#">
                  <img src={Brand2} alt="Brand" />
                </Link>
              </div>
            </div>
            <div className="col-sm-4 col-lg-3">
              <div className="brand-item">
                <Link to="#">
                  <img src={Brand3} alt="Brand" />
                </Link>
              </div>
            </div>
            <div className="col-sm-4 col-lg-3">
              <div className="brand-item">
                <Link to="#">
                  <img src={Brand4} alt="Brand" />
                </Link>
              </div>
            </div>
            <div className="col-sm-4 col-lg-3">
              <div className="brand-item">
                <Link to="#">
                  <img src={Brand1} alt="Brand" />
                </Link>
              </div>
            </div>
            <div className="col-sm-4 col-lg-3">
              <div className="brand-item">
                <Link to="#">
                  <img src={Brand2} alt="Brand" />
                </Link>
              </div>
            </div>
            <div className="col-sm-4 col-lg-3">
              <div className="brand-item">
                <Link to="#">
                  <img src={Brand3} alt="Brand" />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
    </React.Fragment>
  );
};
export default TrustableBrand;
