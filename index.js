const express = require('express');
const app = express();

const { v4: uuidv4 } = require('uuid');

app.post('/generate', (req, res) => {
  const uniqueId = uuidv4();
  res.send(uniqueId);
});

app.listen(3000, () => {
  console.log('Servidor rodando na porta 3000');
});

module.exports = app;