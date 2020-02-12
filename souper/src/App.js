import React from "react";
import Banner from "./components/Banner";
import Body from "./components/Body";
import Footer from "./components/Footer";
import "./App.css";
// import { Button } from "semantic-ui-react";
/* <Button content="Blue button!" primary /> */

const App = () => {
    return (
        <div className="app-container">
            <Banner />
            <div className="body-container">
                <Body />
            </div>
            <Footer />
        </div>
    );
};

export default App;
