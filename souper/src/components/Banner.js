import React from "react";
import "./Css/Banner.css";

const Banner = () => {
    return (
        <div className="header">
            <div className="header-contents">
                <h1>Souper Douper</h1>
                <nav>
                    <a href="#">Home</a>
                    <a href="#">About Us</a>
                    <a href="#">Blog</a>
                    <a href="#">Contact</a>
                    <a href="#">Sign In</a>
                </nav>
            </div>
        </div>
    );
};

export default Banner;
