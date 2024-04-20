import React, { useEffect, useState } from 'react'
import axios from 'axios'
import './Products.css'
import { BsTrash3 } from "react-icons/bs";

const Products = () => {

const [productdata ,setProductdata]=useState([])


const deleteData = async(id)=>{
  try{
    await axios.delete(`http://localhost:3002/api/products/${id}`)
    fetchData()
  }catch(err){
    console.log(err)
  }
}


  const fetchData = async()=>{   

    try{

    await axios.get("http://localhost:3002/api/products/").then((res)=>{
    setProductdata(res.data.data.product.reverse())
  })
  
  
  

  
}catch(err){
  console.log(err)
}}




  //  const deleteData




  useEffect(()=>{
fetchData()
  },[])



  return (
    <div className='productss'>
     <div className='pheader'>
     <p>PRODUCTS</p>
      <hr/>
    </div>

<div className='products'>
{
  productdata.map((val,i)=>(


    <div key={i} className='myProducts'>

      <img src={val.image} alt="" />
      <div className='listings'>

        <p>{val.name}</p>
        <p>{val.price}</p>
      <BsTrash3 onClick={()=>deleteData(val._id)} />
      </div>

    </div>



  ))
}
</div>
  
     

    </div>
  )
}

export default Products