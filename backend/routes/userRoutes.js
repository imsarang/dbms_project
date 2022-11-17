const express = require("express")
const { createUser, login, logout } = require("../controllers/userContollers")
const router = express.Router()

router.route('/create').post(createUser)
router.route('/login').post(login)
router.route('/logout').get(logout)
module.exports = router