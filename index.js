const express = require('express')
const app = express();
const mongoose = require('mongoose')
app.use(express.json())
const Product = require('./Product')
const cors = require('cors')

mongoose.connect('mongodb+srv://obayomisamuel941:Ayosam2403@cluster0.iuubs1l.mongodb.net/Product').then(()=>{
  console.log('data base connected succesfully')
})


app.use(cors())
//GET ALL PRODUCTS
app.get('/api/products' ,async(req,res)=>{
try{
  const product = await Product.find()
  res.status(200).json({
    status:"success",
    data:{
      product
    }
  })
}catch(err){
  console.log(err)
}



})



//CReate new product
app.post('/api/products', async(req,res)=>{
  try{

    const {name,image,price} = req.body


    const newProduct={
      name,
      image,
      price
    }
const product = await Product.create(newProduct)
 res.status(200).json({
  message:"successful",
  status:"success"
 })


  }catch(err){
  console.log(err)
}

})

//DELETE ALL PRODUCTS

app.delete('/api/products/:id' ,async(req,res)=>{
try{
 const data = await Product.findByIdAndDelete(req.params.id)

res.status(200).json({
  status:"success",
   data:{
    data
  }
})
}catch(err){
  console.log(err)
}



})


///UPDATING MY DOCUMENTS
app.put('/api/products/:id' ,async(req,res)=>{
  try{
 const datas =await Product.findByIdAndUpdate(req.params.id,req.body)
 res.status(200).json({
  data:{
    datas
  }
 })
  }catch(err){
    console.log(err)
  }
})

app.listen(3002,(req,res)=>{
  console.log("Server is running on port 3001")
})