import React,{useEffect, useState} from 'react';
import axios from "axios";

function Product() {
    const[product, setProduct] =useState([]);
    useEffect(() => {
        fetchproducts();
    }, []);

    const fetchproducts= async() =>{
        const res= await axios.get("https://ty-shop.herokuapp.com/api/products");
        console.log(res);
        setProduct(res.data.products);
        
    };

  return (
    <div>
    <table>
        <tr> 
        <th> Product Name </th>
        <th>  Description </th>
        </tr>
        {product.map((val) => {
            return (
 <tr>
   <td>{val.productName} </td>
   <td>{val.productDescription} </td>
 </tr>
            );
        })}
            

    
    </table>
      
    </div>
  );
}

export default Product;