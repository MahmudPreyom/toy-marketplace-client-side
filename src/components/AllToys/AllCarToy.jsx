import React from "react";
import {Link} from 'react-router-dom'

const AllCarToy =({allCarToy}) =>{
    const {_id,sellerName,toyName,subCategory,price,rating,quantity,detailDescription} = allCarToy
    return (
        <tr className='font-bold'>
        <td>{sellerName}</td> 
        <td>{toyName}</td> 
        <td>{toyName}</td> 
        <td>{price}</td> 
        <td>{quantity}</td> 
        {/* <td ><Link to={`/viewDetails/${_id}`}>View Details</Link></td>  */}
        <td ><Link>View Details</Link></td> 
      
      </tr>
    );
};

export default AllCarToy;

