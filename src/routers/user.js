const { Router } = require('express');
// gerencio as rotas dos endpoints

const router = Router();

const userController = require('../controllers/user')


router.get('/', userController.getAll)
module.exports = router; 