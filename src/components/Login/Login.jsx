import React from "react";
import { Link } from "react-router-dom"

const Login = () => {
    return (
        <div className="w-full max-w-md mx-auto mt-8 mb-8">
            <form className="bg-white shadow-md rounded px-8 pt-6 pb-8">
                <h2 className="text-center text-lg font-semibold mb-4">Login</h2>

                <div className="mb-4">
                    <label className="block text-gray-700 text-sm font-bold mb-2">Email</label>
                    <input
                        className="form-control w-full"
                        type="email"
                        name="email"
                        placeholder="Enter your email address" />
                </div>

                <div className="mb-4">
                    <label className="block text-gray-700 text-sm font-bold mb-2">Password</label>
                    <input
                        className="form-control w-full"
                        type="password"
                        name="password"
                        placeholder="Enter your password" />
                </div>

                <div className="mb-4">
                    <button
                        className="btn btn-primary w-full"
                        type="submit">Login
                    </button>
                </div>

                <div className="text-center text-gray-700">
                    Don't have an account? <Link to="/register" className="text-primary">Register</Link>
                </div>
            </form>
        </div>
    );
};

export default Login;