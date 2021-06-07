var express = require('express');
var router = express.Router();
const chatService = require('../services/chat.service')

/* chat api list. */
router.get('/', chatService.getAll)
router.get('/:id', chatService.getById)
router.post('/', chatService.insertChat)

module.exports = router;
