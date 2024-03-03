const router = require('express').Router();
const confirmationController = require('../controllers/confirmation-controller');
const { SchemaValidator } = require('../core/validator');
const employeeSchema = require('../validators/employee-schema');



router.get('/', 
confirmationController.getAllConfirmations);

router.post(
  '/',
  confirmationController.create
);

router.put(
  '/:id',
  confirmationController.updateConfirmationByID
);

router.delete('/:id', 
confirmationController.deleteConfirmationByID);

module.exports = router;