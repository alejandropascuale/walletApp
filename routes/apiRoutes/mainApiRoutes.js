var express = require('express');
var router = express.Router();

const mainController = require('../../controllers/apiControllers/mainApiController')

/* Apis Routes */
router.get('/operations/user/:idUser', mainController.listOperations)
/* Select one operation */
router.get('/operations/:idOperation', mainController.selectOperation)
/* POST create operations */
router.post('/operations', mainController.createOperations)
/* PUT edit operation */
router.put('/operations/:idOperation/edit', mainController.updateOperation)
/* DELETE operation */
router.delete('/operations/:idOperation/delete', mainController.deleteOperation)
/* GET filter operation */
router.get('/operations/search/user/:idUser/:category', mainController.filterOperations)

module.exports = router;
