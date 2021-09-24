var express = require('express');
var router = express.Router();

const mainController = require('../../controllers/apiControllers/mainApiController')

/* List of all operations from the user */
router.get('/operations', mainController.listOperations)
/* List of last 10 operations from the user */
router.get('/operations/:idUser/last', mainController.lastOperations)
/* POST create operations */
router.post('/operations/add', mainController.createOperations)
/* GET edit operation form */
router.get('/operations/edit/:idOperation', mainController.editOperationForm)
/* POST edit operation */
router.post('/operations/edit/:idOperation', mainController.updateOperation)
/* DELETE operation */
router.delete('/operations/delete/:idOperation', mainController.deleteOperation)

module.exports = router;
