const { Router } = require('express');

const router = Router();

const depositoController = require('../controllers/depositoModel');

router.post('/', depositoController.update);


module.exports = router; 