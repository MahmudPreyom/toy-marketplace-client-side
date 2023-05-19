import React from "react";
import { AuthContext } from "../Provider/AuthProvider";
import { FcGoogle } from 'react-icons/fc'

const GoogleLogin = () => {
    // const { googleSignIn } = useContext(AuthContext);
    // const handleGoogleSignIn = () => {
    //     googleSignIn()
    //         .then(result => {
    //             console.log(result.user)
    //         })
    //         .catch(error => console.log(error));
    // }
    return (
        <div>
            <div className="divider">OR</div>
            <div className="text-center">
                <button  className="btn btn-outline btn-info gap-2">
                    <FcGoogle></FcGoogle> Google
                </button>
            </div>
        </div>
    );
};

export default GoogleLogin;