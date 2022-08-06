import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom';
import "./ProductDetails.modules.css"
const ProductDetails = () => {
  const [data,setData]=useState("")
  let { productid } = useParams();
  useEffect(()=>{
    loadData()
  },[])

  const loadData=()=>{
    fetch('http://localhost:8080/products/'+productid)
    .then(response => response.json())
    .then(data => setData(data)); 
  }

  
  return (
    <div className='detailsItem'>
      <p>{data.brand}</p>
      <p>{data.category}</p>
      <img src={data.image} alt="" />
      <p>${data.price}</p>
      <p>{data.title}</p>
    </div>
  )
}

export default ProductDetails