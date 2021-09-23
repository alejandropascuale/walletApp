var express = require('express');
var router = express.Router();

const mainController = require('../controllers/mainController')

/* GET home page. */
router.get('/', mainController.index)
/* GET operations page. */
router.get('/operations', mainController.detailOperations)
/* POST create operations */
router.post('/operations/add', mainController.createOperations)

module.exports = router;
