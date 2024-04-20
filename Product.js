const mongoose = require('mongoose')

 const ProductSchema = new mongoose.Schema(
  {
  name:{
    type:String,
    required:true,
    unique:true
  },
  price:{
    type:Number,
    required:true,
  },
  image:{
    type:String,
    required:true
  },

  },
  {
    timestamps:true
  }
 
)













const Product = mongoose.model('Product',ProductSchema)








module.exports = Product