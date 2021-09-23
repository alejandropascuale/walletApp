var express = require('express');
var router = express.Router();

const mainController = require('../controllers/mainController')

/* GET home page. */
router.get('/', mainController.index)
/* GET operations page. */
router.get('/operations', mainController.detailOperations)
/* POST create operations */
router.post('/operations/add', mainController.createOperations)
/* GET edit operation form */
router.get('/operations/edit/:idOperation', mainController.editOperationForm)
/* POST edit operation */
router.post('/operations/edit/:idOperation', mainController.updateOperation)

module.exports = router;
