import React, { useContext, useEffect, useState } from "react";
import { AuthContext } from "../Provider/AuthProvider";
import MyToy from "./MyToy";


const MyToys = () => {
    const { user } = useContext(AuthContext)
    const [myToys, setMyToys] = useState([])

    const url = `http://localhost:5000/allCarToys?sellerEmail=${user?.email}`

    useEffect(() => {
        fetch(url)
        .then(res => res.json())
        .then(data =>{
            setMyToys(data)
        })
    },[])


    

    return (
        <div className="overflow-x-auto">
            <table className="table table-compact  w-2/3 my-12 border mx-auto">
                <thead>
                    <tr>
                        <th>Seller Name</th>
                        <th>Toy Name</th>
                        <th>Sub_Category</th>
                        <th>Price</th>
                        <th>Update</th>
                        <th>Delete</th>
                    </tr>
                </thead>
                <tbody >
                    {
                        myToys.map((myToy, index) => <MyToy
                        key={index}
                        myToy={myToy}
                        ></MyToy>)
                    }
                </tbody>
            </table>
        </div>
    );
};

export default MyToys;