const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
require('dotenv').config();

const connectDB = require('./config/database');

const app = express();

// Middleware
app.use(cors());
app.use(express.json());

// Conectar a MongoDB
connectDB();

// Rutas
app.use('/api/auth', require('./routes/auth'));
app.use('/api/careers', require('./routes/careers'));
app.use('/api/questions', require('./routes/questions'));
app.use('/api/results', require('./routes/results'));

// Ruta de prueba
app.get('/api/test', (req, res) => {
  res.json({ message: 'API de QuizIng funcionando!' });
});

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Servidor ejecutándose en puerto ${PORT}`);
});