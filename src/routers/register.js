const { Router } = require('express');
// gerencio as rotas dos endpoints
const router = Router();

const registerController = require('../controllers/register');

router.post('/', registerController.createAcount);

module.exports = router; 