const { Router } = require('express');
// gerencio as rotas dos endpoints

const router = Router();

const depositoController = require('../controllers/depositoModel');

router.put('/', depositoController.update);


module.exports = router; 