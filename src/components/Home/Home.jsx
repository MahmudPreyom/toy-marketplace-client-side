import React from "react";
import ReactTab from "../ReactTab/ReactTab";
import Banner from "./Banner/Banner";

const Home = () => {
    return (
        <div>
            <h2>This is Home</h2>
            <Banner></Banner>
            <ReactTab></ReactTab>
        </div>
    );
};

export default Home;