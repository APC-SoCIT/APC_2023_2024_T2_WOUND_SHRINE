const router = require('express').Router();
const employee = require('./employee');
const user = require('./user');
const baptism = require('./baptism')




router.use('/employees', employee);
router.use('/user', user);
router.use('/baptism', baptism)



module.exports = router;
