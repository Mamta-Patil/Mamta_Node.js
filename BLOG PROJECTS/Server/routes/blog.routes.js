const express=require("express")
const { createBlogs, deleteBlogs, GetAllBlogs, GetSingleBlog, updatBlog } = require("../controllers/blog.controler")
const app = express()


const blogRouter= express.Router()

blogRouter.post("/create",createBlogs)
 
// delete notes
blogRouter.delete("/delate/:blogId",deleteBlogs)
    
//Get ALl notes of user
blogRouter.get("/getallblog",GetAllBlogs)

// single notes by user
blogRouter.get("/getsinglenote/:blogId",GetSingleBlog)

// update note
blogRouter.patch("/updatenote/:blogId",updatBlog)

module.exports=blogRouter