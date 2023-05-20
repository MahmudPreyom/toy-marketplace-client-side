import React from "react";
import carPic from "../../../assets/carPic1.jpg"
import carPic2 from "../../../assets/carPic2.jpeg"
import carPic3 from "../../../assets/carPic3.jpg"
import carPic4 from "../../../assets/carPic4.webp"
import carPic5 from "../../../assets/carPic5.webp"
import carPic6 from "../../../assets/carPic6.webp"

const Carousel = () => {
    return (
        <div>
            <h2 className="text-4xl font-bold text-center text-red-950 mb-5">Types Of Cars Picture</h2>
            <div className="carousel w-1/2 mx-auto">
                <div id="item1" className="carousel-item w-full">
                    <img src={carPic} className="w-full" />
                </div>
                <div id="item2" className="carousel-item w-full">
                    <img src={carPic2} className="w-full" />
                </div>
                <div id="item3" className="carousel-item w-full">
                    <img src={carPic3} className="w-full" />
                </div>
                <div id="item4" className="carousel-item w-full">
                    <img src={carPic4} className="w-full" />
                </div>
                <div id="item5" className="carousel-item w-full">
                    <img src={carPic5} className="w-full" />
                </div>
                <div id="item6" className="carousel-item w-full">
                    <img src={carPic6} className="w-full" />
                </div>
            </div>
            <div className="flex justify-center w-full py-2 gap-2 mb-5">
                <a href="#item1" className="btn btn-xs">1</a>
                <a href="#item2" className="btn btn-xs">2</a>
                <a href="#item3" className="btn btn-xs">3</a>
                <a href="#item4" className="btn btn-xs">4</a>
                <a href="#item5" className="btn btn-xs">5</a>
                <a href="#item6" className="btn btn-xs">6</a>
            </div>
        </div>
    );
};

export default Carousel;

