// Create a simple Express server that responds with "Hello, World!" when accessed at the root URL.
const express = require('express');
const connectDB = require('./src/db/db');
var cors = require('cors')
const userModel = require('./src/db/models/user');

const dns = require('dns');
dns.setServers(["1.1.1.1", "8.8.8.8"])

const app = express();
app.use(cors())

connectDB();

// To read JSON data from the request body!
app.use(express.json());

app.get('/', (req, res) => {
    res.send('Hello, World!');
});

app.post('/register-data', async (req, res) => {
    try {
        const { registerData } = req.body;

        // Create a new user document using the user model
        const User = new userModel({
            name: registerData.name,
            email: registerData.email,
            password: registerData.password,
            phone: registerData.phone
        })

        // Save the user document to the database
        await User.save();

        // Send a success response
        res.status(201).json({
            message: 'User registered successfully'
        });

    } catch (error) {
        res.status(500).json({
            message: 'Error registering user',
            error: error.message
        });
    }

    // Getting the data from the frontend and logging it to the console
    console.table(registerData);
});

app.listen(3000, () => {
    console.log('Server is running on port 3000');
});