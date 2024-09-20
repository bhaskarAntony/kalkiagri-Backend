const express = require('express');
const { createSeller, getSellers } = require('../controlls/seller');

const router = express.Router();

router.post('/new/kalki/seller', createSeller);
router.get('/all/sellers', getSellers)

module.exports = router;