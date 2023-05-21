import React from "react";
import img from "../../../assets/img.webp"

const Banner = () => {
    return (
        <div className="mb-5">
            <div className="relative">
                <img
                    className="mx-auto w-full md:h-[650px]"
                    src={img}
                    alt="Banner Image"
                />
            </div>

            <div className='absolute md:top-52 top-24 left-0'>
                <p className="md:text-7xl font-bold text-sky-800 italic px-4 md:py-2">
                    BOGNOR MODEL <br /> CAR
                    <small className='md:text-5xl md:font-bold text-blue-500'> Planet</small>
                </p>
                <h1 className='text-white ml-4 md:mt-5 mt-0 md:text-2xl md:font-semibold md:w-1/2'>Given a toy car to play with, he turned it upside down and spun its wheels. One of them tries to feed me a toy car</h1>
            </div>
        </div>
    );
};

export default Banner;