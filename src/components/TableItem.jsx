import React from 'react'
import { useParams } from 'react-router-dom'
import { useNavigate } from "react-router-dom";
import ProductItem from './ProductItem';


export default function TableItem({ item }) {
    let navigate = useNavigate();
    const routeChange = (item) => {
        navigate(`/products/${item.id}`)
    }
    
    return (
      <>
    <tr>
    <td>{item.name}</td>
    <td>{item.price}</td>
          <td><button onClick={() => { routeChange(item) }}>More Details</button></td>
            </tr>
            
      </>
  )
}
