import React from "react";
import Banner from "./components/Banner";
import Body from "./components/Body";
import Footer from "./components/Footer";
// import { Button } from "semantic-ui-react";
/* <Button content="Blue button!" primary /> */

const App = () => {
    return (
        <div>
            <Banner />
            <Body />
            <Footer />
        </div>
    );
};

export default App;
