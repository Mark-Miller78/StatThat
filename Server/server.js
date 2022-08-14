const express = require('express');

const app = express();
const PORT = process.env.PORT || 3001;

app.get('/api/animals', (req, res) => {
    res.send('Hello!');
  });

app.listen(PORT, () => {
    console.log(`Running on: http://localhost:${PORT}`);
});