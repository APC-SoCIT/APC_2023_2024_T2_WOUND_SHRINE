const router = require('express').Router();
const baptismcontroller = require('../controllers/baptism-controller');
const { SchemaValidator } = require('../core/validator');
const employeeSchema = require('../validators/employee-schema');



router.get('/:id', 
baptismcontroller.getAllBaptisms);

router.post(
  '/',
  baptismcontroller.create
);

router.put(
  '/:id',
  baptismcontroller.updateBaptismByID
);

router.delete('/:id', 
baptismcontroller.deleteBaptismByID);

module.exports = router;