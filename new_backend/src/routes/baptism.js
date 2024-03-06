const router = require('express').Router();
const baptismcontroller = require('../controllers/baptism-controller');
const { SchemaValidator } = require('../core/validator');
const employeeSchema = require('../validators/employee-schema');



router.get('/:id', 
baptismcontroller.getAllBaptisms);

router.get('/details/:id', 
baptismcontroller.getById);

router.put(
  '/:id',
  baptismcontroller.updateByID
);

router.post(
  '/',
  baptismcontroller.create
);
module.exports = router;