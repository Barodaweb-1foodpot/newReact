import React from "react";
import { BsBorderAll } from "react-icons/bs";
import { FaLifeRing, FaSquarespace } from "react-icons/fa";
import { GiCarWheel, GiLoincloth, GiRollerSkate } from "react-icons/gi";
import { TbHelmet, TbKeyframes } from "react-icons/tb";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import { Link } from "react-router-dom";
import Sape1 from "./../assets/img/shape1.png";
import Sape2 from "./../assets/img/shape2.png";

const Categories = () => {
  const responsive = {
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 4,
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
      <div className="products-area two ">
        <div className="container">
          <Carousel responsive={responsive}>
            <div className="carouselDiv">
              <div className="products-thumb">
                <Link to="#">
                  <img src={Sape1} alt="Shape" />
                  <img src={Sape2} alt="Shape" />
                  <i class="flaticon-square">
                    <BsBorderAll className="categoriesIcon" />
                  </i>
                  <span>All</span>
                </Link>
              </div>
            </div>
            <div className="carouselDiv">
              <div className="products-thumb">
                <Link to="#">
                  <img src={Sape1} alt="Shape" />
                  <img src={Sape2} alt="Shape" />
                  <i class="flaticon-headphones">
                    <GiRollerSkate className="categoriesIcon" />
                  </i>
                  <span>Dash Complete Skate</span>
                </Link>
              </div>
            </div>
            <div className="carouselDiv">
              <div className="products-thumb">
                <Link to="#">
                  <img src={Sape1} alt="Shape" />
                  <img src={Sape2} alt="Shape" />
                  <i class="flaticon-microphone">
                    <GiRollerSkate className="categoriesIcon" />
                  </i>
                  <span>Rush 2.0 Complete Skate</span>
                </Link>
              </div>
            </div>
            <div className="carouselDiv">
              <div className="products-thumb">
                <Link to="#">
                  <img src={Sape1} alt="Shape" />
                  <img src={Sape2} alt="Shape" />
                  <i class="flaticon-laptop">
                    <GiRollerSkate className="categoriesIcon" />
                  </i>
                  <span>Fly Complete Skate</span>
                </Link>
              </div>
            </div>
            <div className="carouselDiv">
              <div className="products-thumb">
                <Link to="#">
                  <img src={Sape1} alt="Shape" />
                  <img src={Sape2} alt="Shape" />
                  <i class="flaticon-laptop">
                    <GiRollerSkate className="categoriesIcon" />
                  </i>
                  <span>Boots</span>
                </Link>
              </div>
            </div>
            <div className="carouselDiv">
              <div className="products-thumb">
                <Link to="#">
                  <img src={Sape1} alt="Shape" />
                  <img src={Sape2} alt="Shape" />
                  <i class="flaticon-laptop">
                    <TbKeyframes className="categoriesIcon" />
                  </i>
                  <span>Frames</span>
                </Link>
              </div>
            </div>
            <div className="carouselDiv">
              <div className="products-thumb">
                <Link to="#">
                  <img src={Sape1} alt="Shape" />
                  <img src={Sape2} alt="Shape" />
                  <i class="flaticon-laptop">
                    <GiCarWheel className="categoriesIcon" />
                  </i>
                  <span>Wheels</span>
                </Link>
              </div>
            </div>
            <div className="carouselDiv">
              <div className="products-thumb">
                <Link to="#">
                  <img src={Sape1} alt="Shape" />
                  <img src={Sape2} alt="Shape" />
                  <i class="flaticon-laptop">
                    <FaLifeRing className="categoriesIcon" />
                  </i>
                  <span>Bearings</span>
                </Link>
              </div>
            </div>
            <div className="carouselDiv">
              <div className="products-thumb">
                <Link to="#">
                  <img src={Sape1} alt="Shape" />
                  <img src={Sape2} alt="Shape" />
                  <i class="flaticon-laptop">
                    <FaSquarespace className="categoriesIcon" />
                  </i>
                  <span>Accessories </span>
                </Link>
              </div>
            </div>
            <div className="carouselDiv">
              <div className="products-thumb">
                <Link to="#">
                  <img src={Sape1} alt="Shape" />
                  <img src={Sape2} alt="Shape" />
                  <i class="flaticon-laptop">
                    <GiLoincloth className="categoriesIcon" />
                  </i>
                  <span>Apparels </span>
                </Link>
              </div>
            </div>
            <div className="carouselDiv">
              <div className="products-thumb">
                <Link to="#">
                  <img src={Sape1} alt="Shape" />
                  <img src={Sape2} alt="Shape" />
                  <i class="flaticon-laptop">
                    <TbHelmet className="categoriesIcon" />
                  </i>
                  <span>Helmet </span>
                </Link>
              </div>
            </div>
          </Carousel>
        </div>
      </div>
    </React.Fragment>
  );
};
export default Categories;
