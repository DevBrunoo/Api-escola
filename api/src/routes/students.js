const express = require('express');
const router = express.Router();
const studentsController = require('../controllers/studentsController');

// Rotas para estudantes
router.post('/', studentsController.createStudent);
router.get('/:id', studentsController.getStudentById);
router.get('/:id/class', studentsController.getClassByStudentId);
router.get('/:id/professors', studentsController.getProfessorsByStudentId);
router.put('/:id', studentsController.updateStudent);
router.delete('/:id', studentsController.deleteStudent);

module.exports = router;
