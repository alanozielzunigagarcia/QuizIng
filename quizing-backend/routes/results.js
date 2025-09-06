const express = require('express');
const router = express.Router();

// Ruta temporal para testing
router.get('/', (req, res) => {
  res.json({ message: 'Results route working!' });
});

module.exports = router;