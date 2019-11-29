const express = require('express');
const router = express.Router();
const feedCtrl = require('../controllers/feeds');

router.get('/', feedCtrl.getFeed);


module.exports = router;