const { Router } = require('express');
// gerencio as rotas dos endpoints

const router = Router();

const deleteController = require('../controllers/deleteController');

router.delete('/:id', deleteController.deleteId);


module.exports = router; 