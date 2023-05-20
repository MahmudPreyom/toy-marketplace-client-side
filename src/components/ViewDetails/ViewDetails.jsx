import React from "react";
import { useLoaderData } from "react-router-dom"

const ViewDetails = () => {
    const view = useLoaderData();
    const { _id, sellerName, toyName, subCategory, price, rating, quantity, detailDescription, photo, sellerEmail } = view;
    return (
        <div className="mx-auto card w-96 bg-sky-100 mt-4 mb-4 shadow-xl">
            <figure className="px-10 pt-10">
                <img src={photo} alt="" className="rounded-xl" />
            </figure>
            <div className="card-body items-center text-center">
                <h2 className="card-title">Toy Name: {toyName}</h2>
                <p> <span className="font-bold italic">Seller Name:</span> {sellerName}</p>
                <p> <span className="font-bold italic">Seller Email:</span> {sellerEmail}</p>
                <p> <span className="font-bold italic">Available Quantity:</span> {quantity}</p>
                <p> <span className="font-bold italic">Price:</span> {price}</p>
                <p> <span className="font-bold italic">Rating:</span> {rating}</p>
                <p> <span className="font-bold italic">Details:</span> {detailDescription}</p>
            </div>
        </div>
    );
};

export default ViewDetails;