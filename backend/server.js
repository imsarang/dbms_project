const express = require('express')
const dotenv = require("dotenv")
const cors = require('cors')
const mysql = require('mysql')
const session = require('express-session')
const cookieParser = require('cookie-parser')

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

app.use(cookieParser())

app.use(
    session({
        name: 'user_id',      // cookie name stored in the web browser
        secret: 'my_secret',     // helps to protect session
        cookie: {
            maxAge: 30 * 86400000, // 30 * (24 * 60 * 60 * 1000) = 30 * 86400000 => session is stored 30 days
        }
    })
);


// connection to database
connectDB()

app.use("/api/user/",userRoutes)
app.use("/api/company/",companyRoutes)
app.listen(port,()=>{
    console.log(`Server running in port number ${port}`);
})
