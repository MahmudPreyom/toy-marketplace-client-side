import React from "react";
import { useLoaderData } from "react-router-dom"
import useTitle from "../../hooks/useTitle";

const UpdateToys = () => {
    const myToys = useLoaderData();
    const { _id, price, quantity, detailDescription } = myToys;
    useTitle('Update')
    const handleUpdateCar = event => {
        event.preventDefault();

         const form = event.target;

         const price = form.price.value;
         const quantity = form.quantity.value;
         const detailDescription = form.detailDescription.value;

         const updateToyCar = {price, quantity, detailDescription}
        //  console.log(updateToyCar);
         fetch(`https://toys-planet-server.vercel.app/allCarToys/${_id}`, {
            method: 'PUT',
            headers: {
                'content-type' : 'application/json'
            },
            body: JSON.stringify(updateToyCar)
         })
         .then(res => res.json())
         .then(data => {
            console.log(data);
            if(data.modifiedCount > 0){
                alert ( 'Updated Data')
            }
         })
    }
    return (
        <div className="w-full max-w-md mx-auto mt-8 mb-8 rounded bg-sky-200 p-3">
            <h1 className="text-2xl font-bold mb-4">Update Toy Car</h1>
            <form onSubmit={handleUpdateCar} className="max-w-lg mx-auto">
               
                <div className="mb-4">
                    <label htmlFor="price" className="block text-gray-700 font-bold">
                        Price
                    </label>
                    <input
                        type="number"
                        name="price"
                        defaultValue={price}
                        className="border border-gray-300 rounded-md px-4 py-2 w-full"
                    />
                </div>
                
                <div className="mb-4">
                    <label htmlFor="quantity" className="block text-gray-700 font-bold">
                        Available Quantity
                    </label>
                    <input
                        type="number"
                        name="quantity"
                        defaultValue={quantity}
                        className="border border-gray-300 rounded-md px-4 py-2 w-full"
                    />
                </div>
                <div className="mb-4">
                    <label htmlFor="quantity" className="block text-gray-700 font-bold">
                    Detail description
                    </label>
                    <input
                        type="text"
                        name="detailDescription"
                        defaultValue={detailDescription}
                        className="border border-gray-300 rounded-md px-4 py-2 w-full"
                    />
                </div>
                <div className="text-center">
                    <button
                        type="submit"
                        className="bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded"
                    >
                        Submit
                    </button>
                </div>
            </form>
        </div>
    );
};

export default UpdateToys;