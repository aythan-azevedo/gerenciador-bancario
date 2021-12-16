const { Router } = require('express');
// gerencio as rotas dos endpoints

const router = Router();

const transferController = require('../controllers/transfercontroller');

router.put('/', transferController.updateTrans);


module.exports = router; 