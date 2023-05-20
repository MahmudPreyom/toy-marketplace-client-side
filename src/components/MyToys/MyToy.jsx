import React from "react";
import { FcDeleteDatabase } from "react-icons/fc";
import { RxUpdate } from "react-icons/rx";
import {Link} from 'react-router-dom'

const MyToy = ({ myToy, handleDelete }) => {
    console.log(myToy);
    const {_id,sellerName,toyName,subCategory,price,rating,quantity,detailDescription} = myToy

    return (
        <tr className='font-bold'>
        <td>{sellerName}</td> 
        <td>{toyName}</td> 
        <td>{subCategory}</td> 
        <td>{price}</td> 
        <td ><Link className="underline" to={`/updatetoys/${_id}`}><RxUpdate style={{fontSize: '1.5rem'}}></RxUpdate></Link></td> 
        <td onClick={() =>handleDelete(_id)} className="underline" ><Link><FcDeleteDatabase style={{fontSize: '1.5rem'}}></FcDeleteDatabase></Link></td> 
      
      </tr>
    );
};

export default MyToy;

