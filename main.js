const express = require('express');
const app = express();

app.get('/', (req, res) => {
    res.send('Hello, World!');
})

app.get('/users', (req, res) => {
    res.send('All Users');
})

app.listen(3000, () => console.log('server running at : http://localhost:3000'));