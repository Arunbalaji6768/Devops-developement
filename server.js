const express = require('express');
const app = express();
app.get('/', (req, res) => res.send('<h1>Experiment 7: CI/CD Successful!</h1><p>Developed by Arunbalaji</p>'));
app.listen(3000, () => console.log('Running on port 3000'));