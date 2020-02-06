import React from "react";
import { Button } from "semantic-ui-react";

const Banner = () => {
    return (
        <div>
            <h1>Souper Douper</h1>
            <div>
                <nav>
                    <a href="#">Home</a>
                    <a href="#">About Us</a>
                    <a href="#">Blog</a>
                    <a href="#">Contact</a>
                    <a href="#">Sign In</a>
                </nav>
            </div>
            <Button content="Blue button!" primary />
        </div>
    );
};

export default Banner;
