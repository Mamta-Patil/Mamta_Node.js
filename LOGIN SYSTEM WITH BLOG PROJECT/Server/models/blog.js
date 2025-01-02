const mongoose=require("mongoose")
const blogSchema=new mongoose.Schema({
    Title:String,
    Author:String,
    Content:String,
    Tag:["string"],
    PublishedDate:Date,
},{
    versionKey:false,
    timestamps:true
}
)

const blogModel=mongoose.model("blog",blogSchema)

module.exports=blogModel