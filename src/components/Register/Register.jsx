import React, { useContext, useState } from "react";
import { Link } from "react-router-dom"
import { AuthContext } from "../Provider/AuthProvider";

const Register = () => {
    const { createUser } = useContext(AuthContext);
    
    const handleRegister = event => {
        event.preventDefault();
        const form = event.target;
        const name = form.name.value;
        const photo = form.photo.value;
        const email = form.email.value;
        const password = form.password.value;
        console.log(name, photo, email, password);
        createUser(email, password)
            .then(result => {
                const createdUser = result.user;
                console.log(createdUser);
            })
            .catch(error => {
                console.log(error);
            })
    }
    return (
        <div className="w-full max-w-md mx-auto mt-8 mb-8">
            <form onSubmit={handleRegister} className="bg-white shadow-md rounded px-8 pt-6 pb-8">
                <h2 className="text-center text-lg font-semibold mb-4">Register</h2>

                <div className="mb-4">
                    <label className="block text-gray-700 text-sm font-bold mb-2">Name</label>
                    <input
                        className="form-control w-full"
                        type="text"
                        name="name"
                        placeholder="Enter your name" required />
                </div>
                <div className="mb-4">
                    <label className="block text-gray-700 text-sm font-bold mb-2">Email</label>
                    <input
                        className="form-control w-full"
                        type="email"
                        name="email"
                        placeholder="Enter your email address" required />
                </div>

                <div className="mb-4">
                    <label className="block text-gray-700 text-sm font-bold mb-2">Password</label>
                    <input
                        className="form-control w-full"
                        type="password"
                        name="password"
                        placeholder="Enter your password" required />
                </div>

                <div className="mb-4">
                    <label className="block text-gray-700 text-sm font-bold mb-2">Photo URL</label>
                    <input
                        className="form-control w-full"
                        type="text"
                        name="photo"
                        placeholder="Enter your photo URL" required />
                </div>

                <div className="mb-4">
                    <button
                        className="btn btn-primary w-full"
                        type="submit">Register
                    </button>
                </div>

                <div className="text-center text-gray-700">
                    Already have an account? <Link to="/register" className="text-primary">Login</Link>
                </div>
            </form>
        </div>
    );
};

export default Register;