import React from "react";
import banner from "../images/banner.jpg";
// import donate from "../images/donate.png";
// import involved from "../images/get-involved.png";
import "./Css/Carousel.css";

const Carousel = () => {
    return (
        <div className="carousel">
            <img src={banner} alt="dogs" />
        </div>
    );
};

export default Carousel;
