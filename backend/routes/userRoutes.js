const express = require("express")
const { createUser } = require("../controllers/userContollers")
const router = express.Router()

router.route('/create').post(createUser)
module.exports = router