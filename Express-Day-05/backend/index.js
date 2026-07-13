// Create a simple Express server that responds with "Hello, World!" when accessed at the root URL.
const express = require('express');

const app = express();

app.get('/', (req, res) => {
    res.send('Hello, World!');
});

app.listen(3000, () => {
    console.log('Server is running on port 3000');
});