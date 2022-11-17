const config = require("../config");
const catchAsyncErrors = require("../middleware/catchAsyncErrors");
const mysql = require("mysql");
const connection = mysql.createConnection(config.db);

let stock = 0;
exports.createStock = (req, res, next) => {
  const { company_name, buying_price, no_of_stocks } = req.body;

  // let stock_id = 0
  connection.query(
    `INSERT into stock (owner_id,buying_price) values (?,?)`,
    [req.cookies.details.id, buying_price],
    (err, response) => {
        if(err) throw err
        stock=response.insertId;
      res.cookie("stock_id", response.insertId, {
        httpOnly: true,
        maxAge: 24 * 60 * 60 * 1000,
      });
      return response.insertId
    }
  );
  next();
};
exports.createCompany = (req, res) => {
  // createStock(req,res)
  // console.log(result);
  // console.log(req.cookies);
//   let stock_id = req.cookies.stock_id;
  
//   console.log(stock_id);
  const { company_name,buying_price, no_of_stocks } = req.body;
  connection.query(
    `INSERT into stock (owner_id,buying_price) values (?,?)`,
    [req.cookies.details.id,buying_price],
    (err, result) => {
      if (err) console.log(err);
      else {
        connection.query(
          `INSERT INTO company (company_name,manager_id,stock_id,no_of_stocks) VALUES (?,?,?,?)`,
          [company_name,req.cookies.details.id,result.insertId, no_of_stocks],
        )
        res.send("Values inserted");
      }
    }
  );
};


exports.getCompanies =(req, res) => {
  connection.query(`select * from company`, (err, result) => {
    if (err) {
      res.json({
        success: false,
        error: err,
      });
    } else {
      res.json({
        success: true,
        result: result,
      });
    }
  });
};
