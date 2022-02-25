import React from 'react'
import { useParams } from 'react-router-dom'
import { useState,useEffect } from 'react';

export default function ProductItem() {
    const [prod,setProd]=useState({})
    const params = useParams();
    
    
    useEffect(() => {
        console.log("useEffect called");
      try {
        
        fetch(`http://localhost:3000/products/${params.id}`)
            .then((res) => res.json())
            .then((res) => setProd(res));
      } catch (e) {
        console.log(e);
        }
        
    
      },[params]);
   
  return (
      <div style={{ fontSize: "20px" }}>
          Now showing post<br/>
          {prod.name}<br/>
          {prod.price}
  </div>
  )
}

