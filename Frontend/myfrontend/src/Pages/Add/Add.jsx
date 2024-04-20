import React from 'react'
import { useState } from 'react'
import './Add.css'
import axios from 'axios'

const Add = () => {
 const [name,setName]= useState("")
 const [price,setPrice]= useState("")
 const [image,setImage]= useState("")
 
 const pdata = {name,price,image}
 
 const HandleSubmit = (e)=>{
  e.preventDefault()

   axios.post("http://localhost:3002/api/products" , pdata)
   .then(
    alert('New Product added')
   )
 }


  return (
    <div className='add'>
<form onSubmit={HandleSubmit}>
  <label htmlFor='name'>Name:</label>
  <input type="text"  placeholder='Put in a product' value={name} required onChange={(e)=>setName(e.target.value)}/>
  <label htmlFor='price'>Price:</label>
  <input type ="text" placeholder='Price' value={price} onChange={(e)=>setPrice(e.target.value)} required/>
  <label htmlFor='image'>Image:</label>
  <input type="text"  value={image} onChange={(e)=>setImage(e.target.value)} required />
  <button >Submit</button>
</form>


    </div>
  )
}

export default Add