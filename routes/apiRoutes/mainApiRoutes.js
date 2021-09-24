var express = require('express');
var router = express.Router();

const mainController = require('../../controllers/apiControllers/mainApiController')

/* List of all operations from the user */
router.get('/operations', mainController.listOperations)
/* Select one operation */
router.get('/operations/:idOperation', mainController.selectOperation)
/* POST create operations */
router.post('/operations/add', mainController.createOperations)
/* PUT edit operation */
router.put('/operations/:idOperation/edit', mainController.updateOperation)
/* DELETE operation */
router.delete('/operations/delete/:idOperation', mainController.deleteOperation)

module.exports = router;
