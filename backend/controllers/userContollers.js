const config = require('../config')
const catchAsyncErrors = require('../middleware/catchAsyncErrors')
const mysql = require("mysql")
const connection = mysql.createConnection(config.db)

exports.createUser = catchAsyncErrors(async (req,res)=>{
    const {name,email,password,age,works_in,gender} = req.body;
    
    connection.query(
        `INSERT INTO user (name,email,password,age,works_in,gender) VALUES (?,?,?,?,?,?)`,
        [name,email,password,age,works_in,gender],
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
    if (req.session.userId) {
        res.json({result: 'ERROR', message: 'User already logged in.'});
    } else {
        const user = {
            email: req.body.email,
            password: req.body.password
        };
        // const connection = await database.createConnection();
        connection.query(
            `   SELECT user_id FROM user WHERE email = ? AND password = ?`,
            [user.email,user.password],
            (err,result)=>{
                if(err){
                    res.send(`${err}`)
                    console.log(err);
                }
                if(result.length>0){
                    // req.session.user = result[0].user_id
                    const userDetails = {
                        id:result[0].user_id,
                        email:user.email
                    }
                    res.cookie('details',userDetails,{
                        httpOnly:true,
                        maxAge:24*60*60*1000
                    })
                    res.json({success:true,user_id:result[0].user_id})
                    // console.log(req.session)
                }else res.json({success:false,error:`Invalid Email or Password`})
            }
            );
    }
})

exports.logout = catchAsyncErrors(async(req,res)=>{
    // console.log(req.sessionID);
    // console.log(req.cookies.user_id);
    console.log(req.cookies);
    if (req.cookies.user_id) {
        res.clearCookie('details')
        // res.clearCookie('user_id')
        res.json({result: 'SUCCESS'});
    } else {
        res.json({result: 'ERROR', message: 'User is not logged in.'});
    }
})

// bank details
