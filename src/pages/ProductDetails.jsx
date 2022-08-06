import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom';

const ProductDetails = () => {
  const [data,setData]=useState("")
  let { pid } = useParams();
  useEffect(()=>{
    loadData()
  },[])

  const loadData=()=>{
    fetch('http://localhost:8080/products/'+pid)
    .then(response => response.json())
    .then(data => setData(data)); 
  }

  
  return (
    <div>
      <p>{data.brand}</p>
      <p>{data.category}</p>
      <p>{data.price}</p>
      <p>{data.title}</p>
      <img src={data.image} alt="" />
    </div>
  )
}

export default ProductDetails