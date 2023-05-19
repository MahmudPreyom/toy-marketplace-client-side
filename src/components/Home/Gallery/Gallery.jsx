import React from "react";
import car1 from "../../../assets/car1.jpg"
import car7 from "../../../assets/car7.jpg"
import car3 from "../../../assets/car3.jpg"
import car8 from "../../../assets/car8.jpg"
import car5 from "../../../assets/car5.jpg"
import car6 from "../../../assets/car6.jpg"
import "../Gallery/gallery.css"

const Gallery = () => {

    const data = [
        {
            id: 1,
            imgSrc: car1,
        },
        {
            id: 2,
            imgSrc: car7,
        },
        {
            id: 3,
            imgSrc: car3,
        },
        {
            id: 4,
            imgSrc: car8,
        },
        {
            id: 5,
            imgSrc: car5,
        },
        {
            id: 6,
            imgSrc: car6,
        },
    ]

    return (
        <div className="gallery">
            <h1>this is Gallery</h1>
            {
                data.map((item,index)=>{
                    return (
                        <div className="pics" key={index}>
                            <img src={item.imgSrc} style={{width: '100%'}} />
                        </div>
                    )
                })
            }
        </div>
    );
};

export default Gallery;