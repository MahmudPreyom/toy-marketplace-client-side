import React, { useContext, useEffect, useState } from "react";
import { AuthContext } from "../Provider/AuthProvider";
import MyToy from "./MyToy";


const MyToys = () => {
    const { user } = useContext(AuthContext)
    const [myToys, setMyToys] = useState([])

    const url = `https://toys-planet-server.vercel.app/allCarToys?sellerEmail=${user?.email}`

    useEffect(() => {
        fetch(url)
        .then(res => res.json())
        .then(data =>{
            setMyToys(data)
        })
    },[])

    const handleDelete = id => {
        const proceed = confirm ('Are you want to Delete');
        if(proceed) {
            fetch(`https://toys-planet-server.vercel.app/allCarToys/${id}`, {
                method: "DELETE"
            })
            .then(res => res.json())
            .then(data => {
                console.log(data);
                if(data.deleteCount > 0) {
                    alert ('Deleted item successfully');
                }
            })
        }
    }


    return (
        <div className="overflow-x-auto bg-sky-100">
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
                        handleDelete={handleDelete}
                        ></MyToy>)
                    }
                </tbody>
            </table>
        </div>
    );
};

export default MyToys;