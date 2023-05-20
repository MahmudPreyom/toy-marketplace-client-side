import React from "react";
import { FcViewDetails } from "react-icons/fc";
import {Link} from 'react-router-dom'


const AllCarToy =({allCarToy}) =>{
    const {_id,sellerName,toyName,subCategory,price,rating,quantity,detailDescription} = allCarToy
    return (
        <tr className='font-bold'>
        <td>{sellerName}</td> 
        <td>{toyName}</td> 
        <td>{subCategory}</td> 
        <td> $ {price}</td> 
        <td>{quantity}</td> 
        <td ><Link to={`/viewdetails/${_id}`}><FcViewDetails style={{fontSize: "1.5rem"}}></FcViewDetails></Link></td> 
      
      </tr>
    );
};

export default AllCarToy;

