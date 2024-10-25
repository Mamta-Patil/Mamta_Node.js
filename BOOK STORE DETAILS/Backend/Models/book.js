const mongoose =require("mongoose")
const BookSchema=new mongoose.Schema({
    title:String,
    author :String,
    price:Number,
    year:Number,
    img:String,
})

const BookModel=mongoose.model("books",BookSchema)

module.exports=BookModel