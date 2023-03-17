const express = require('express');
const router = express.Router();
const professorsController = require('../controllers/professorsController');

// Rotas para professores
router.post('/', professorsController.createProfessor);
router.get('/:id', professorsController.getProfessorById);
router.get('/:id/disciplines', professorsController.getDisciplinesByProfessorId);
router.put('/:id', professorsController.updateProfessor);
router.delete('/:id', professorsController.deleteProfessor);

module.exports = router;
