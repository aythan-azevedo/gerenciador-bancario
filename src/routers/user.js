const { Router } = require('express');

const router = Router();

const userController = require('../controllers/userController')


router.get('/', userController.getAll)
module.exports = router; 