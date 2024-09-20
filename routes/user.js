const express = require('express');
const { createUser, getUsers } = require('../controlls/user');

const router = express.Router();

router.post('/new/kalki/user', createUser);
router.get('/all/users', getUsers)

module.exports = router;