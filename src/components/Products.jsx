import React from 'react';
import { useState,useEffect } from 'react';
import Table from './Table';

export default function Products() {
    const [prodList, setProdList] = useState([]);
    useEffect(() => {
        fetch(`http://localhost:3000/products`)
          .then((res) => res.json())
            .then((res) => setProdList(res));
      },[]);

  return (
      <div>
          <h1>Products</h1> 
          <Table prodList={prodList} setProdList={setProdList}></Table>
      </div>
  )
}
