import React from 'react';

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
        const detailDescription =form.detailDescription.value;
        const addCars = {photo, toyName: name, sellerName, sellerEmail, subCategory, price, rating,quantity,detailDescription};
        // console.log(addCars);

        fetch('https://toys-planet-server.vercel.app/allCarToys',{
            method: 'POST', 
            headers: {
                'content-type' : 'application/json'
            },
            body: JSON.stringify(addCars)
        })
        .then(res => res.json())
        .then(data => {
            console.log(data);
        })

    };

    return (
        <div className="w-full max-w-md mx-auto mt-8 mb-8 rounded bg-sky-200 p-3">
            <h1 className="text-2xl font-bold mb-4">Add A Toy</h1>
            <form onSubmit={handleSubmit} className="max-w-lg mx-auto">
                <div className="mb-4">
                    <label htmlFor="pictureURL" className="block text-gray-700 font-bold">
                        Picture URL of the toy
                    </label>
                    <input
                        type="text"
                        name="photo"
                        className="border border-gray-300 rounded-md px-4 py-2 w-full" required
                    />
                </div>
                <div className="mb-4">
                    <label htmlFor="name" className="block text-gray-700 font-bold">
                        Toy Name
                    </label>
                    <input
                        type="text"
                        name="name"
                        className="border border-gray-300 rounded-md px-4 py-2 w-full" required
                    />
                </div>
                <div className="mb-4">
                    <label htmlFor="sellerName" className="block text-gray-700 font-bold">
                        Seller Name
                    </label>
                    <input
                        type="text"
                        name="sellerName"
                        className="border border-gray-300 rounded-md px-4 py-2 w-full" required
                    />
                </div>
                <div className="mb-4">
                    <label htmlFor="sellerEmail" className="block text-gray-700 font-bold">
                        Seller Email
                    </label>
                    <input
                        type="email"
                        name="sellerEmail"
                        className="border border-gray-300 rounded-md px-4 py-2 w-full" required
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
                        <option value="Jeep Car Toys">Jeep Car Toys</option>
                        <option value="Motorcycle Car Toys">Motorcycle Car Toys</option>
                        <option value="Racing Car Toys">Racing Car Toys</option>
                    </select>
                </div>
                <div className="mb-4">
                    <label htmlFor="price" className="block text-gray-700 font-bold">
                        Price
                    </label>
                    <input
                        type="number"
                        name="price"
                        className="border border-gray-300 rounded-md px-4 py-2 w-full" required
                    />
                </div>
                <div className="mb-4">
                    <label htmlFor="rating" className="block text-gray-700 font-bold">
                        Rating
                    </label>
                    <input
                        type="number"
                        name="rating"
                        className="border border-gray-300 rounded-md px-4 py-2 w-full" required
                    />
                </div>
                <div className="mb-4">
                    <label htmlFor="quantity" className="block text-gray-700 font-bold">
                        Available Quantity
                    </label>
                    <input
                        type="number"
                        name="quantity"
                        className="border border-gray-300 rounded-md px-4 py-2 w-full" required
                    />
                </div>
                <div className="mb-4">
                    <label htmlFor="quantity" className="block text-gray-700 font-bold">
                    Detail description
                    </label>
                    <input
                        type="text"
                        name="detailDescription"
                        className="border border-gray-300 rounded-md px-4 py-2 w-full" required
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
