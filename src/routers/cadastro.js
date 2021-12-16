const { Router } = require('express');
// gerencio as rotas dos endpoints
const router = Router();

const cadastroController = require('../controllers/cadastroController');

router.post('/', cadastroController.createAcount);

module.exports = router; 