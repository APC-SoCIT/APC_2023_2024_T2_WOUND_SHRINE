const router = require('express').Router();
const anointingController = require('../controllers/anointing-controller');
const { SchemaValidator } = require('../core/validator');
const employeeSchema = require('../validators/employee-schema');



router.get('/:id', 
anointingController.getAllAnointings);

router.post(
  '/',
  anointingController.create
);

router.get('/details/:id', 
  anointingController.getById);

router.put(
  '/:id',
  anointingController.updateAnointingByID
);


module.exports = router;