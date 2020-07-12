const express = require('express');
const router = express.Router();
const verifyToken = require('../middleware/auth')
const counter = require('../controller/counter')
const user = require('../controller/user')
/* GET home page. */
router.post('/v1/login', user.login);
router.post('/v1/register', user.register);
router.get('/v1/next', verifyToken, counter.next);
router.get('/v1/current', verifyToken, counter.current);
router.post('/v1/current', verifyToken, counter.setCurrent);

module.exports = router;
