import React from "react";
import Banner from "./Banner/Banner";
import ReactTab from "../Home/ReactTab/ReactTab"
import Gallery from "./Gallery/Gallery";
import Carousel from "./Carousel/Carousel";
import SecondSection from "./Secondsection/SecondSection";
import useTitle from "../../hooks/useTitle";

const Home = () => {
    useTitle('Home')
    return (
        <div>
            <Banner></Banner>
            <Gallery></Gallery>
            <Carousel></Carousel>
            <SecondSection></SecondSection>
            <ReactTab></ReactTab>
        </div>
    );
};

export default Home;