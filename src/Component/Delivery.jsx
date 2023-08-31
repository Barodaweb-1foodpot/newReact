import React from "react";
import { BiSolidGift, BiSupport } from "react-icons/bi";
import { TbTruckDelivery } from "react-icons/tb";
import Support from "./../assets/img/support-shape1.png";

const Delivery = () => {
  return (
    <React.Fragment>
      <div className="support-area pt-100 pb-70">
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-sm-6 col-lg-4">
              <div className="support-item two">
                <i className="flaticon-free-delivery">
                  <TbTruckDelivery />{" "}
                </i>
                <h3>Free Next Day Delivery</h3>
                <p>Lorem ipsum dolor sit amet, cons etetur sadipscing elitr</p>
                <img src={Support} alt="Shape" />
              </div>
            </div>
            <div className="col-sm-6 col-lg-4">
              <div className="support-item three">
                <i className="flaticon-call-center">
                  <BiSupport />
                </i>
                <h3>24/7 Online Support</h3>
                <p>Lorem ipsum dolor sit amet, cons etetur sadipscing elitr</p>
                <img src={Support} alt="Shape" />
              </div>
            </div>
            <div className="col-sm-6 col-lg-4">
              <div className="support-item four">
                <i className="flaticon-giftbox">
                  {" "}
                  <BiSolidGift />{" "}
                </i>
                <h3>Weekly Gift Voucher</h3>
                <p>Lorem ipsum dolor sit amet, cons etetur sadipscing elitr</p>
                <img src={Support} alt="Shape" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </React.Fragment>
  );
};
export default Delivery;
