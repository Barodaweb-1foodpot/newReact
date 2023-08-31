import React from "react";
import { Link } from "react-router-dom";
import Sale1 from "./../assets/img/bestProduct.webp";
// import Sale2 from "./../assets/img/sale-main2.png";
// import Sale3 from "./../assets/img/sale-main3.png";

const Offer = () => {
  return (
    <React.Fragment>
      <div className="sale-area">
        <div className="container-fluid">
          <div className="row justify-content-center">
            <div className="col-sm-6 col-lg-4">
              <div className="sale-item sale-bg-one">
                <img src={Sale1} alt="Sale" />
                <div className="inner">
                  <h3>
                    <span className="percent">20%</span> Black Friday{" "}
                    <span>Sale</span>
                  </h3>
                  <p>Text Will Be Coming soon</p>
                  <Link to="#">Shop Now</Link>
                </div>
              </div>
            </div>
            <div className="col-sm-6 col-lg-4">
              <div className="sale-item sale-bg-two">
                <img src={Sale1} alt="Sale" />
                <div className="inner">
                  <h3>
                    <span className="percent">5%</span> Christmas{" "}
                    <span>Sale</span>
                  </h3>
                  <p>Text Will Be Coming soon</p>
                  <Link to="#">Shop Now</Link>
                </div>
              </div>
            </div>
            <div className="col-sm-6 col-lg-4">
              <div className="sale-item sale-bg-three">
                <img src={Sale1} alt="Sale" />
                <div className="inner">
                  <h3>
                    <span className="percent">10%</span> Winter{" "}
                    <span>Sale</span>
                  </h3>
                  <p>Text Will Be Coming soon</p>
                  <Link to="#">Shop Now</Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </React.Fragment>
  );
};
export default Offer;
