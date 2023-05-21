import React from "react";
import cardCar2 from "../../../assets/cardCar2.jpg"

const SecondSection = () => {
    return (
        <div className="mb-24">
            <h2 className="text-center font-bold text-4xl mb-2 mt-24 text-blue-900" data-aos="flip-up" data-aos-easing="ease-in-cubic"
                    data-aos-duration="2000">Our Market Place</h2>
            <p className="text-center mb-8">Toy Cars Industry Latest Research Report. Complete Market Research, Market Analysis, CAGR, Trends, Major Players, Market Share, Market Size, Forecast.</p>
            <div className="card lg:card-side bg-base-100 shadow-xl mb-10 mt-5 bg-sky-100">
                <figure data-aos="fade-left" data-aos-easing="ease-in-cubic"
                    data-aos-duration="2000"><img src={cardCar2} alt="Album" /></figure>
                <div className="card-body">
                    <h2 className="card-title text-5xl italic text-sky-800 font-bold">Children Toy Planet</h2>
                    <p>Toy vehicle means any motorized or propellant-driven device that has no manufacturer-issued vehicle identification number that is designed or used to carry any person or persons, on any number of wheels, bearings, glides, runners, or a cushion of air.</p>
                </div>
            </div>
        </div>
    );
};

export default SecondSection;