const config = require('../config')
const catchAsyncErrors = require('../middleware/catchAsyncErrors')
const mysql = require("mysql")
const connection = mysql.createConnection(config.db)

exports.createCompany = catchAsyncErrors(async(req,res)=>{
    const {company_name,manager_id,stock_id,no_of_stocks} = req.body
    
    connection.query(
        `INSERT INTO company (company_name,manager_id,stock_id,no_of_stocks) VALUES (?,?,?,?)`,
        [company_name,manager_id,stock_id,no_of_stocks],
        (err,result)=>{
            if(err) console.log(err);
            else{
                res.send("Values inserted")
            }
        }
        
    )
})