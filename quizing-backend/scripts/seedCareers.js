const mongoose = require('mongoose');
const Career = require('../models/Career');
require('dotenv').config();

const careersData = [
  {
    name: 'Ingeniería en Sistemas Computacionales',
    code: 'ISC',
    description: 'Carrera de Ingeniería en Sistemas Computacionales',
    egelCode: 'EGEL-ISC',
    topics: [
      { name: 'Matemáticas', description: 'Cálculo y álgebra', weight: 20 },
      { name: 'Programación', description: 'Fundamentos de programación', weight: 25 },
      { name: 'Bases de Datos', description: 'Diseño de bases de datos', weight: 15 },
      { name: 'Redes', description: 'Redes de computadoras', weight: 20 },
      { name: 'Ingeniería de Software', description: 'Procesos de desarrollo', weight: 20 }
    ],
    totalQuestions: 50
  },
  {
    name: 'Administración',
    code: 'ADM',
    description: 'Carrera de Administración',
    egelCode: 'EGEL-ADM',
    topics: [
      { name: 'Contabilidad', description: 'Principios contables', weight: 25 },
      { name: 'Finanzas', description: 'Administración financiera', weight: 25 },
      { name: 'Marketing', description: 'Mercadotecnia', weight: 20 },
      { name: 'Recursos Humanos', description: 'Gestión de personal', weight: 15 },
      { name: 'Estrategia', description: 'Planificación estratégica', weight: 15 }
    ],
    totalQuestions: 50
  }
];

const seedDatabase = async () => {
  try {
    await mongoose.connect(process.env.MONGODB_URI);
    console.log('Conectado a MongoDB');

    // Limpiar colección existente
    await Career.deleteMany({});
    console.log('Colección de carreras limpiada');

    // Insertar nuevas carreras
    await Career.insertMany(careersData);
    console.log('Datos de carreras insertados correctamente');

    process.exit(0);
  } catch (error) {
    console.error('Error:', error);
    process.exit(1);
  }
};

seedDatabase();