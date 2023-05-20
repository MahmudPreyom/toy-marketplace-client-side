import React from "react";
import {Link} from 'react-router-dom'

const MyToy = ({ myToy }) => {
    console.log(myToy);
    const {_id,sellerName,toyName,subCategory,price,rating,quantity,detailDescription} = myToy

    return (
        <tr className='font-bold'>
        <td>{sellerName}</td> 
        <td>{toyName}</td> 
        <td>{toyName}</td> 
        <td>{price}</td> 
        <td className="underline">Update</td> 
        {/* <td ><Link to={`/viewDetails/${_id}`}>View Details</Link></td>  */}
        <td className="underline" ><Link>Delete</Link></td> 
      
      </tr>
    );
};

export default MyToy;

