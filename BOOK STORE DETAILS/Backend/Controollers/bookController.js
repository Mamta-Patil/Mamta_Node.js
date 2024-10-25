const BookModel = require("../Models/book")

// create user
const postbook=async(req,res)=>{
  console.log(req.body)
  try {
      await BookModel.create(req.body)
      res.send("user created successfully")
  } catch (error) {
      res.send(error)
  }
}

// get user data
const getbook=async(req,res)=>{
  try {
      const data= await BookModel.find()
      res.send(data)
  } catch (error) {
      res.send(error)
  }
}

// get single  data
const singledata = async(req,res)=>{
  const {id}=req.params
  try {
      const data=   await BookModel.findById(id)
          // res.send(data)
          // if(!data)
          // {
          //    return res.send("user not found")
          // }
          res.send(data)
  } catch (error) {
      // res.status(400).json({message:error.message})
      res.send(error)        
  }

}

// for delete data
const deletdata = async(req,res)=>{
  const {id}=req.params
try {
  await BookModel.findByIdAndDelete(id)
  res.send("User deleted successfully")
  
} catch (error) {
  res.send(error)
}

}

// for update data
const updatedata=async(req,res)=>{
  const {id}=req.params
  const {price}=req.body
  const {descrption}=req.body
  const {author}=req.body
  const {title}=req.body
  
  try {
      await BookModel.findByIdAndUpdate(id,{$set:{price,descrption,author,title}})
      res.send("user data updated succefully")
  } catch (error) {
      res.send(error)
  }
}

module.exports={getbook,deletdata,updatedata,singledata,postbook}