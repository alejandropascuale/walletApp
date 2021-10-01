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
router.get('/operations/:idOperation/edit', mainController.editOperationForm)
router.get('/operations/:idOperation/edit-local', mainController.editLocalOperationForm)
/* PUT edit operation */
router.put('/operations/:idOperation/edit', mainController.updateOperation)
/* DELETE operation */
router.delete('/operations/:idOperation/delete', mainController.deleteOperation)
/* GET filter operation */
router.get('/operations/category-filter/:category', mainController.filterOperations)


module.exports = router;
