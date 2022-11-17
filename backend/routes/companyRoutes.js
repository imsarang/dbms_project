const express = require("express")
const { createCompany, getCompanies, createStock } = require("../controllers/companyControllers")
const router = express.Router()

router.route('/create').post(createCompany)
router.route('/get').get(getCompanies)
module.exports = router