const express = require("express")
const { createCompany } = require("../controllers/companyControllers")
const router = express.Router()

router.route('/create').post(createCompany)
module.exports = router