const express = require('express');
const router = express.Router();

const validateSignup = require('../middlewares/validateSignup');
const validateSignin = require('../middlewares/validateSignin');

router.post("/signup", validateSignup);

router.post("/signin", validateSignin);

module.exports = router;