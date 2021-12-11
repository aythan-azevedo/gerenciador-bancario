const { Router } = require('express');

const router = Router();

const cadastroController = require('../controllers/cadastroController');

router.post('/', cadastroController.createAcount);


module.exports = router; 