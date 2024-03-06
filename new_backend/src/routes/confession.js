const router = require('express').Router();
const cofessionController = require('../controllers/confession-controller');
const { SchemaValidator } = require('../core/validator');
const employeeSchema = require('../validators/employee-schema');



router.get('/:id', 
cofessionController.getAllConfessions);

router.post(
  '/',
  cofessionController.create
);

router.put(
  '/:id',
  cofessionController.updateConfessionByID
);

router.delete('/:id', 
cofessionController.deleteConfessionByID);

module.exports = router;