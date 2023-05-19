import React, { useState } from 'react';

const AddToysForm = () => {


    const handleSubmit = event => {
        event.preventDefault();
        const form = event.target;
        const photo = form.photo.value;
        const name = form.name.value;
        const sellerName = form.sellerName.value;
        const sellerEmail = form.sellerEmail.value;
        const subCategory = form.subCategory.value;
        const price = form.price.value;
        const rating = form.rating.value;
        const quantity = form.quantity.value;
        // const result = [photo, name, sellerName, sellerEmail, subCategory, price, rating,quantity];
        console.log(photo, name, sellerName, sellerEmail, subCategory, price, rating,quantity);
        // Perform form submission or data handling here
        // You can access the form values from the state variables
    };

    return (
        <div className="container mx-auto py-8">
            <h1 className="text-2xl font-bold mb-4">Add A Toy</h1>
            <form onSubmit={handleSubmit} className="max-w-lg mx-auto">
                <div className="mb-4">
                    <label htmlFor="pictureURL" className="block text-gray-700 font-bold">
                        Picture URL of the toy
                    </label>
                    <input
                        type="text"
                        name="photo"
                        className="border border-gray-300 rounded-md px-4 py-2 w-full"
                    />
                </div>
                <div className="mb-4">
                    <label htmlFor="name" className="block text-gray-700 font-bold">
                        Name
                    </label>
                    <input
                        type="text"
                        name="name"
                        className="border border-gray-300 rounded-md px-4 py-2 w-full"
                    />
                </div>
                <div className="mb-4">
                    <label htmlFor="sellerName" className="block text-gray-700 font-bold">
                        Seller Name
                    </label>
                    <input
                        type="text"
                        name="sellerName"
                        className="border border-gray-300 rounded-md px-4 py-2 w-full"
                    />
                </div>
                <div className="mb-4">
                    <label htmlFor="sellerEmail" className="block text-gray-700 font-bold">
                        Seller Email
                    </label>
                    <input
                        type="email"
                        name="sellerEmail"
                        className="border border-gray-300 rounded-md px-4 py-2 w-full"
                    />
                </div>
                <div className="mb-4">
                    <label htmlFor="subCategory" className="block text-gray-700 font-bold">
                        Sub-category
                    </label>
                    <select
                        name="subCategory"
                        className="border border-gray-300 rounded-md px-4 py-2 w-full"
                    >
                        <option value="">Select a sub-category</option>
                        <option value="Math Toys">Math Toys</option>
                        <option value="Language Toys">Language Toys</option>
                        <option value="Science Toys">Science Toys</option>
                    </select>
                </div>
                <div className="mb-4">
                    <label htmlFor="price" className="block text-gray-700 font-bold">
                        Price
                    </label>
                    <input
                        type="text"
                        name="price"
                        className="border border-gray-300 rounded-md px-4 py-2 w-full"
                    />
                </div>
                <div className="mb-4">
                    <label htmlFor="rating" className="block text-gray-700 font-bold">
                        Rating
                    </label>
                    <input
                        type="text"
                        name="rating"
                        className="border border-gray-300 rounded-md px-4 py-2 w-full"
                    />
                </div>
                <div className="mb-4">
                    <label htmlFor="quantity" className="block text-gray-700 font-bold">
                        Available Quantity
                    </label>
                    <input
                        type="text"
                        name="quantity"
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

export default AddToysForm;
