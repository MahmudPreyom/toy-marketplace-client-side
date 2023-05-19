import React from "react";
import Banner from "./Banner/Banner";
import ReactTab from "../Home/ReactTab/ReactTab"
import Gallery from "./Gallery/Gallery";

const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <Gallery></Gallery>
            <ReactTab></ReactTab>
        </div>
    );
};

export default Home;