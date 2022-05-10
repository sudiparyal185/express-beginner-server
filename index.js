const express = require('express');
require('dotenv').config();
const app = express();

const PORT = process.env.PORT || 3001;

app.get('/messages', (req, res) => {
    res.status(200).send('Message route');
})
app.get('/', (req, res) => {
    res.status(200).send('<h1>Hello</h1>');
})
app.listen(PORT, () => {
    console.log(`Server listening on ${PORT}`);
})