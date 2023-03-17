const express = require('express');
const router = express.Router();
const classesController = require('../controllers/classesController');

// Rota para listar todas as turmas
router.get('/', classesController.listAllClasses);

// Rota para obter detalhes de uma turma
router.get('/:id', classesController.getClassDetails);

// Rota para criar uma nova turma
router.post('/', classesController.createClass);

// Rota para atualizar os dados de uma turma
router.put('/:id', classesController.updateClass);

// Rota para excluir uma turma
router.delete('/:id', classesController.deleteClass);

module.exports = router;
