import React, { useEffect, useState } from 'react'
import axios from 'axios'
 import "./Home.modules.css"
 import { useNavigate} from "react-router-dom";

 const Home = () => {
 const [data,setData]=useState([])
 let navigate = useNavigate();

useEffect(()=>{
  loadData()
},[])


const loadData=()=>{
  fetch('http://localhost:8080/products')
  .then(response => response.json())
  .then(data => setData(data)); 
}


 

const moreDetails=(id)=>
{
    
   navigate("/ProductDetails/"+id);
}


 

  return (
    <div className='main_div'>
      {
        data.map((res)=>{
          return(<>
          <div className='card'>
            <p>{res.brand}</p> 
            <p>{res.title}</p> 
            <p>{res.category}</p> 
            <p>{res.price}</p>
            <img src={res.image} alt="" /> 
             <button onClick={()=>moreDetails(res.id)}>more Details</button>
          </div>
          </>)
        })
      }
    </div>
  )
}

export default Home