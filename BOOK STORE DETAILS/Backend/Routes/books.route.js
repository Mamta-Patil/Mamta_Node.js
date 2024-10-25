const express=require("express")
const { getbook, postbook, singledata, deletdata, updatedata } = require("../Controollers/bookController")
 const BookRouter=express.Router()

 BookRouter.get("/getuser",getbook)

 BookRouter.post("/create",postbook)

 BookRouter.get("/getsingleuser/:id",singledata)

 BookRouter.delete("/delete/:id",deletdata)

 BookRouter.patch("/updatedata/:id",updatedata)

module.exports=BookRouter