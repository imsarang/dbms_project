const config = {
    db: {
      /* don't expose password or any sensitive info, done only for demo */
      host: "localhost",
      user: "root",
      password: "",
      database: "stock_market_management",
      multipleStatements: true,
    },
    listPerPage: 10,
  };
  module.exports = config;