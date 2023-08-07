const express = require('express')
const mongoose = require('mongoose')
const router =  require("./routes/book-routes")
const cors = require('cors')
const app = express()

// middlewares
app.use(express.json())
app.use(cors())

app.use("/books",router)//localhost:5000/books

// app.use('/',(req,res,next)=>{
//     res.send("This is our starting app")
// })




mongoose.connect("mongodb+srv://admin:uCHQm6BB8S3SXl2n@cluster0.bu0h54z.mongodb.net/bookStore")
.then(()=>console.log("connected to the database"))
.then(()=>{
    app.listen(5000)
}).catch((err)=>console.log(err))




//    uCHQm6BB8S3SXl2n