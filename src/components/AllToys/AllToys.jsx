import React from "react";
import {useLoaderData} from 'react-router-dom'
import AllCarToy from "./AllCarToy";

const AllToys = () => {
    const allCarToys = useLoaderData();
    console.log(allCarToys);
    return (
        <div className="overflow-x-auto">
            <table className="table table-compact  w-2/3 my-12 border mx-auto">
                <thead>
                    <tr>
                        <th>Seller Name</th>
                        <th>Toy Name</th>
                        <th>Sub_Category</th>
                        <th>Price</th>
                        <th>Available Quantity</th>
                        <th>view Details</th>
                    </tr>
                </thead>
                <tbody >
                    {
                        allCarToys.map((allCarToy, index) => <AllCarToy
                        key={index}
                        allCarToy={allCarToy}
                        ></AllCarToy>)
                    }
                </tbody>
            </table>
        </div>
    );
};

export default AllToys;