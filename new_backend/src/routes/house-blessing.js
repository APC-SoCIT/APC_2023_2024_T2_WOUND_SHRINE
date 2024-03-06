const router = require('express').Router();
const houseBlessingController = require('../controllers/house-blessing-controller');
const { SchemaValidator } = require('../core/validator');
const employeeSchema = require('../validators/employee-schema');



router.get('/:id', 
houseBlessingController.getAllHouseBlessings);

router.post(
  '/',
  houseBlessingController.create
);

router.put(
  '/:id',
  houseBlessingController.updateHouseBlessingByID
);

router.get('/details/:id', 
houseBlessingController.getById);

router.delete('/:id', 
houseBlessingController.deleteHouseBlessingByID);

module.exports = router;