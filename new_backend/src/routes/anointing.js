const router = require('express').Router();
const anointingController = require('../controllers/anointing-controller');
const { SchemaValidator } = require('../core/validator');
const employeeSchema = require('../validators/employee-schema');



router.get('/', 
anointingController.getAllAnointings);

router.post(
  '/',
  anointingController.create
);

router.put(
  '/:id',
  anointingController.updateAnointingByID
);

router.delete('/:id', 
anointingController.deleteAnointingByID);

module.exports = router;