const mysql = require('mysql')
const config = require('./config')
const connectDB = ()=>{
    const connection = mysql.createConnection(config.db)
    
    connection.connect((function(err){
        if(err) throw err
        console.log(`Database Connected!`);
    }))
}

module.exports = connectDB