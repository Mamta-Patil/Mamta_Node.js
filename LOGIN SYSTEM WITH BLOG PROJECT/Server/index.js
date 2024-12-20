const express= require("express")
const dotenv=require("dotenv")
const connection = require("./config/db")
const userRouter = require("./routes/user.routes")
dotenv.config()
const app=express()
app.use(express.json())
console.log(process.env.PORT)
var cookieParser = require('cookie-parser')
const notesRouter = require("./routes/notes.routes")
app.use(cookieParser())
// var express = require('express')
var cors = require('cors')
app.use(cors())

// user routers
app.use("/user",userRouter)

// notes routers
app.use("/notes", notesRouter)

app.listen(process.env.PORT
    || 3000,async()=>{
    try {
    await connection
       console.log('connected to db') 
       console.log(`servr is runing port on ${process.env.PORT || 3000 }`)
    } catch (error) {
        console.log(error)
    } 
})