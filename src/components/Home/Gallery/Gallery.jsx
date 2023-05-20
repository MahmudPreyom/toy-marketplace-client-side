import React from "react";
import car1 from "../../../assets/car1.jpg"
import car2 from "../../../assets/car2.jpg"
import car7 from "../../../assets/car7.jpg"
import car9 from "../../../assets/car9.jpg"
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
            imgSrc: car2,
        },
        {
            id: 4,
            imgSrc: car9,
        },
        {
            id: 5,
            imgSrc: car8,
        },
        {
            id: 6,
            imgSrc: car5,
        },
        {
            id: 7,
            imgSrc: car6,
        },
    ]

    return (
        <div>
            <h3 className="text-center font-bold text-4xl mb-10 mt-10 text-red-950">Toys Planet Car</h3>
            <div className="gallery">
                {
                    data.map((item, index) => {
                        return (
                            <div className="pics" key={index}>
                                <img src={item.imgSrc} style={{ width: '100%' }} />
                            </div>
                        )
                    })
                }
            </div>
        </div>
    );
};

export default Gallery;