import React from "react";
import "./Css/Banner.css";

const Banner = () => {
    return (
        <div className="header">
            <div className="header-contents">
                <h1>Souper Douper</h1>
                <nav>
                    <a href="http://localhost:3000/">Home</a>
                    <a href="http://localhost:3000/">About Us</a>
                    <a href="http://localhost:3000/">Blog</a>
                    <a href="http://localhost:3000/">Contact</a>
                    <a href="http://localhost:3000/">Sign In</a>
                </nav>
            </div>
        </div>
    );
};

export default Banner;
