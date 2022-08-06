import React, { useEffect, useState } from 'react'
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

const addToCart=(cartData)=>{
 
fetch('http://localhost:8080/cart', {
  method: 'POST',  
  headers: {
    'Content-Type': 'application/json',
  },
  body: JSON.stringify(cartData),
})
.then((response) => response.json())
.then((data) => {
  console.log('Success:', data);
  alert("added sucessfully")
})
.catch((error) => {
  console.error('Error:', error);
});

}


 

  return (
    <div className='main_div'>
      {
        data.map((res)=>{
          return(<>
          <div className='card'>
            <p>{res.brand}</p> 
            <p>{res.title}</p> 
            <img src={res.image} alt="" /> 
            <p>for {res.category} only</p> 
            <p>Price:${res.price}</p>
             <button className='moreDetails' onClick={()=>moreDetails(res.id)}>more Details</button>
             <button  className='addTocart' onClick={()=>addToCart(res)}>Add to Cart</button>
          </div>
          </>)
        })
      }
    </div>
  )
}

export default Home