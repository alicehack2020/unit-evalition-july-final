import React, { useEffect, useState } from 'react'
import axios from 'axios'
 import "./Home.modules.css"
 import { useNavigate} from "react-router-dom";
import "./Cart.modules.css"
 const Cart = () => {
 const [data,setData]=useState([])
 let navigate = useNavigate();

useEffect(()=>{
  loadData()
},[])


const loadData=()=>{
  fetch('http://localhost:8080/cart')
  .then(response => response.json())
  .then(data => setData(data)); 
}
  return (
    <div className='main_div'>
    <table>
        <thead>
          <tr>
            <td>brand</td>
            <td>category</td>
            <td>image</td>
            <td>price</td>
            <td>title</td>
          </tr>
        </thead>
        <tbody>
        {
          data.map((ele)=>{
            return(<>
              <tr>
              <td><img src={ele.image} alt="" /><br />
              <td><button className='addTocart'>increase</button></td>
                <td><button>1</button></td>
                <td><button className='addTocart'>decrease</button></td>
                <td><button className='addTocart'>remove</button></td>
              </td>
                <td>{ele.brand}</td>
                <td>{ele.category}</td>
                <td>{ele.price}</td>
                <td>{ele.title}</td>
                
              </tr>
            </>)
          })  
        }
        </tbody>
        
    </table>
      
       
    </div>
  )
}

export default Cart