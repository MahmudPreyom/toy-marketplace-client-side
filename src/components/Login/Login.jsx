import React, { useContext } from "react";
import { Link, useNavigate, useLocation } from "react-router-dom"
import { AuthContext } from "../Provider/AuthProvider";
import { FcGoogle } from 'react-icons/fc'


const Login = () => {
    const { signIn } = useContext(AuthContext);
    const navigate = useNavigate();
    const location = useLocation();
    const from = location.state?.from?.pathname || '/'
    const handleLogin = event => {
        event.preventDefault();
        const form = event.target;
        const email = form.email.value;
        const password = form.password.value;
        console.log(email, password);


        signIn(email, password)
            .then(result => {
                const loggedUser = result.user;
                console.log(loggedUser);
                navigate(from, { replace: true })
            })
            .catch(error => {
                console.log(error);
            })

    }
    return (
        <div className="w-full max-w-md mx-auto mt-8 mb-8">
            <form onSubmit={handleLogin} className="bg-white shadow-md rounded px-8 pt-6 pb-8">
                <h2 className="text-center text-lg font-semibold mb-4">Login</h2>

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
                    <button
                        className="btn btn-primary w-full"
                        type="submit">Login
                    </button>
                </div>

                <div className="text-center text-gray-700">
                    Don't have an account? <Link to="/register" className="text-primary">Register</Link>
                </div>
            </form>
            <button className="btn btn-outline btn-info gap-2 mt-2 md:mx-28 md:w-1/2">
                <FcGoogle></FcGoogle> Google
            </button>
        </div>
    );
};

export default Login;