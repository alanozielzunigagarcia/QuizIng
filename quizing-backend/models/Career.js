const mongoose = require('mongoose');

const careerSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
    unique: true
  },
  code: {
    type: String,
    required: true,
    unique: true
  },
  description: {
    type: String,
    required: true
  },
  egelCode: {
    type: String,
    required: true
  },
  topics: [{
    name: String,
    description: String,
    weight: Number // Peso en el examen EGEL
  }],
  totalQuestions: {
    type: Number,
    default: 50
  }
});

module.exports = mongoose.model('Career', careerSchema);