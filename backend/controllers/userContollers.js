const config = require('../config')
const catchAsyncErrors = require('../middleware/catchAsyncErrors')
const mysql = require("mysql")
const connection = mysql.createConnection(config.db)

exports.createUser = catchAsyncErrors(async (req,res)=>{
    const {name,email,age,works_in,gender} = req.body;
    
    connection.query(
        `INSERT INTO user (name,email,age,works_in,gender) VALUES (?,?,?,?,?)`,
        [name,email,age,works_in,gender],
        (err,result)=>{
            if(err) console.log(err);
            else{
                res.send("Values inserted")
            }
        }
        
    )
})

exports.showUsers = catchAsyncErrors(async(req,res)=>{

})

// login-logout
exports.login = catchAsyncErrors(async(req,res)=>{
    const email = req.body.email
})