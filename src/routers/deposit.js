const { Router } = require('express');

const router = Router();

const depositoController = require('../controllers/depositoModel');

router.put('/', depositoController.update);


module.exports = router; 