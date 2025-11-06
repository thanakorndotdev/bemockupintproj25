var express = require('express');
var router = express.Router();
const controller = require('../controllers/studyPlanController');

router.get('/', controller.list)

module.exports = router;