var express = require('express');
var router = express.Router();
const userService = require('../services/user.service')

/* GET users listing. */
router.get('/', userService.getAll)
router.get('/:id', userService.getById)
router.post('/', userService.insertUser)

module.exports = router;
