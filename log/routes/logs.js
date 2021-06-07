var express = require('express');
var router = express.Router();
const logService = require('../services/log.service')

/* GET users listing. */
router.get('/', logService.getAll)
router.get('/:id', logService.getById)
router.post('/', logService.insertLog)

module.exports = router;
