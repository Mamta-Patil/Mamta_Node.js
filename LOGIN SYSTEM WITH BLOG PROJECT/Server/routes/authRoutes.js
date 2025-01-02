const express=require("express")
const { signup, signin, getalluser, deletuser, updateuserinfo, getperticularuser } = require("../controllers/authController")

const authRouter=express.Router()
// const validator = require("../middleware/Validator");
// const UserLogger = require("../middleware/UserLogger");
// sinup route
authRouter.post("/signup",signup)

// signin route
authRouter.post("/signin",signin)

// get all  user information
authRouter.get("/getalluser",getalluser)

// get particular user
authRouter.get("/getperticularuser/:_id",getperticularuser)

// delete user by admin
authRouter.delete("/delateuser/:_id",deletuser)

// update user info
authRouter.patch("/edit/:_id",updateuserinfo)

module.exports=authRouter