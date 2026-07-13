// Create a simple Express server that responds with "Hello, World!" when accessed at the root URL.
const express = require('express');

var cors = require('cors')

const app = express();
app.use(cors())

// To read JSON data from the request body!
app.use(express.json());

app.get('/', (req, res) => {
    res.send('Hello, World!');
});

app.post('/register-data', (req, res) => {
    const { registerData } = req.body;
    console.table(registerData);
});

app.listen(3000, () => {
    console.log('Server is running on port 3000');
});