const express = require('express');
const { createbuyer, getbuyers } = require('../controlls/buyer');


const router = express.Router();

router.post('/new/kalki/buyer', createbuyer);
router.get('/all/buyers', getbuyers)

module.exports = router;