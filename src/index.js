//servidor Express

const express = require('express');
const app = express();

app.get('/home', (req, res) => {
    res.send("Rota Principal");
});

app.get('/', (req, res) => {
    res.send('Primeira página');
});

app.get('/array', (req, res) => {
    const array = [1, 2, 3, 4, 5];
    res.send(array);
})

app. listen(3000);