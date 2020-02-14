import React from "react";

import programs from "../images/programs.png";
import involved from "../images/get-involved.png";
import donate from "../images/donate.png";
import "./Css/Columns.css";

const Columns = () => {
    return (
        <div className="bottom-content">
            <div className="programs">
                <img
                    className="programs-image"
                    src={programs}
                    alt="open hands symbol"
                />
                <h3>Programs</h3>
                <p>
                    At the Soup Kitchen, our mission is to provide a hand up and
                    out of homelessness. Feed Me Hope Bakery, Culinary School,
                    and Food Truck help our guests gain the skills they need to
                    transform their lives.
                </p>
            </div>

            <div className="get-involved">
                <img
                    className="get-involved-image"
                    src={involved}
                    alt="handshake forming a heart"
                />
                <h3>Get Involved</h3>
                <p>
                    Volunteers are the backbone of the Soup Kitchen. Check out
                    our various opportunities to find one that's right for you!{" "}
                </p>
            </div>

            <div className="donate">
                <img
                    className="donate-image"
                    src={donate}
                    alt="hand donating coins"
                />
                <h3>Donate</h3>
                <p>
                    We rely on private donations of food and money to meet the
                    needs of our guests. Donate{" "}
                    <a href="http://localhost:3000/">online</a>, through{" "}
                    <a href="http://localhost:3000/">Pick.Click.Give</a>, or
                    send donations to our{" "}
                    <a href="http://localhost:3000/">mailing address</a>.
                </p>
            </div>
        </div>
    );
};

export default Columns;
