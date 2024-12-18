const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');

const app = express();

// Middleware
app.use(cors());
app.use(bodyParser.json());

// Sample route to check if the server is working
app.get('/', (req, res) => {
    res.send('Welcome to the backend API!');
});

// Set up the server to listen on a port
const PORT = 5000;
app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});
