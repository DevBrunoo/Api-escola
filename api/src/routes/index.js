const express = require('express');
const router = express.Router();
const classesRoutes = require('./classes');
const disciplinesRoutes = require('./disciplines');
const professorsRoutes = require('./professors');
const studentsRoutes = require('./students');

// Rotas da API
router.use('/classes', classesRoutes);
router.use('/disciplines', disciplinesRoutes);
router.use('/professors', professorsRoutes);
router.use('/students', studentsRoutes);

module.exports = router;
