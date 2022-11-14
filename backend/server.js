const express = require('express')
const dotenv = require("dotenv")
const cors = require('cors')
const mysql = require('mysql')

const port = process.env.PORT || 5000

const app = express()
const userRoutes = require('./routes/userRoutes')
const companyRoutes = require('./routes/companyRoutes')
const connectDB  = require('./connectDB')

app.use(express.json())

app.use(cors({
    origin:"http://localhost:3000",
    methods:"GET,POST,PUT,DELETE",
    credentials:true,
}))

// connection to database
connectDB()

app.use("/api/user/",userRoutes)
app.use("/api/company/",companyRoutes)
app.listen(port,()=>{
    console.log(`Server running in port number ${port}`);
})
