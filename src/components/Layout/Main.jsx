import React from "react";
import { Outlet } from "react-router-dom"
import Footer from "../Shared/Footer";
import Navigationbar from "../Shared/Navigationbar";

const Main = () => {
    return (
        <div>
            <Navigationbar></Navigationbar>
            <Outlet></Outlet>
            <Footer></Footer>
        </div>
    );
};

export default Main;