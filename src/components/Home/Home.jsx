import React from "react";
import Banner from "./Banner/Banner";
import ReactTab from "../Home/ReactTab/ReactTab"
import Gallery from "./Gallery/Gallery";
import Carousel from "./Carousel/Carousel";

const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <Gallery></Gallery>
            <Carousel></Carousel>
            <ReactTab></ReactTab>
        </div>
    );
};

export default Home;