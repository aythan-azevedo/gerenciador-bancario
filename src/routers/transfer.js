const { Router } = require('express');

const router = Router();

const transferController = require('../controllers/transfercontroller');

router.put('/', transferController.updateTrans);


module.exports = router; 