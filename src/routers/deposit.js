const { Router } = require('express');
// gerencio as rotas dos endpoints

const router = Router();

const depositController = require('../controllers/deposit');

router.put('/', depositController.update);


module.exports = router; 