const express = require("express")
const dotenv = require("dotenv")
const connection = require("./config/db")
dotenv.config()
const app = express()
app.use(express.json())
console.log(process.env.PORT)
// const notesRouter = require("./routes/blog.routes")
var cors = require('cors')
const blogRouter = require("./routes/blogRoutes")
const authRouter = require("./routes/authRoutes")
// const blogRouter = require("./routes/blog.routes")


app.use(cors({
    origin: "http://localhost:5173",
    credentials: true
}))


// user routes
app.use("/user",authRouter)

// blog routers
app.use("/blog", blogRouter )

app.listen(process.env.PORT
    || 3000, async () => {
        try {
            await connection
            console.log('connected to db')
            console.log(`servr is runing port on ${process.env.PORT || 3000}`)
        } catch (error) {
            console.log(error)
        }
    })