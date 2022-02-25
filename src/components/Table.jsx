import React, { useState } from 'react'
import TableItem from './TableItem';


export default function Table({ prodList,setProdList}) {
    
   

   
  return (
      <div>
          <h2>Table</h2>
          <table>
              <tr>
                  <th>Product Name </th>
                  <th>Price </th>
                  <th> more details</th>
              </tr>
          {prodList.map((item) => {
                {console.log("iy",item)}
                  return ( 
                   <TableItem key={item.id} item={item}></TableItem>
               )
                  
                  
              })
            }
              
          </table>
         
      </div>
     
  )
}
