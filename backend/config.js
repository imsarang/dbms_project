const config = {
    db: {
      /* don't expose password or any sensitive info, done only for demo */
      host: "localhost",
      user: "root",
      password: "",
      database: "stock_market_management",
    },
    listPerPage: 10,
  };
  module.exports = config;