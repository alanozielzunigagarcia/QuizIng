const express = require('express');
const router = express.Router();

// Simular datos de carreras (luego vendrán de la base de datos)
const careers = [
  {
    id: 1,
    name: 'Ingeniería en Sistemas Computacionales',
    code: 'ISC',
    egelCode: 'EGEL-ISC'
  },
  {
    id: 2, 
    name: 'Administración',
    code: 'ADM',
    egelCode: 'EGEL-ADM'
  }
];

// Obtener todas las carreras
router.get('/', (req, res) => {
  res.json(careers);
});

// Obtener una carrera específica
router.get('/:id', (req, res) => {
  const career = careers.find(c => c.id === parseInt(req.params.id));
  if (!career) return res.status(404).json({ error: 'Carrera no encontrada' });
  res.json(career);
});

module.exports = router;