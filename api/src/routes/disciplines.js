const express = require('express');
const router = express.Router();
const disciplinesController = require('../controllers/disciplinesController');

// Rota para listar todas as disciplinas
router.get('/', disciplinesController.listAllDisciplines);

// Rota para obter detalhes de uma disciplina
router.get('/:id', disciplinesController.getDisciplineDetails);

// Rota para criar uma nova disciplina
router.post('/', disciplinesController.createDiscipline);

// Rota para atualizar os dados de uma disciplina
router.put('/:id', disciplinesController.updateDiscipline);

// Rota para excluir uma disciplina
router.delete('/:id', disciplinesController.deleteDiscipline);

module.exports = router;
