const express = require('express');
const app = express();

const port = process.env.PORT || 3000;

const { v4: uuidv4 } = require('uuid');

app.post('/generate', (req, res) => {
  const uniqueId = uuidv4();
  res.send(uniqueId);
});

app.get('/', (req, res) => {
    const uniqueId = uuidv4();
    res.send(uniqueId);
  });

app.listen(port, () => {
  console.log('Started !!! Port ' + port);
});

module.exports = app;