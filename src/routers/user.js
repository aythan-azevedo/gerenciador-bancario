const { Router } = require('express');
// gerencio as rotas dos endpoints

const router = Router();

const userController = require('../controllers/userController')


router.get('/', userController.getAll)
module.exports = router; 