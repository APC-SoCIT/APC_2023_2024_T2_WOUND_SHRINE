const router = require('express').Router();
const confessionController = require('../controllers/confession-controller');
const { SchemaValidator } = require('../core/validator');
const employeeSchema = require('../validators/employee-schema');



router.get('/:id', 
confessionController.getAllConfessions);

router.post(
  '/',
  confessionController.create
);

router.put(
  '/:id',
  confessionController.updateConfessionByID
);

router.get('/details/:id', 
confessionController.getById);


router.delete('/:id', 
confessionController.deleteConfessionByID);

module.exports = router;