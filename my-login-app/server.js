const express = require('express');
const bodyParser = require('body-parser');
const path = require('path');

const app = express();
const port = 3000;

// Middleware to parse JSON and URL encoded data
app.use(bodyParser.urlencoded({ extended: false }));

// Serve static files (login page)
app.use(express.static(path.join(__dirname, 'public')));

// Handle login POST request
app.post('/login', (req, res) => {
    const { username, password } = req.body;

    // For simplicity, hardcode a username and password
    if (username === 'user' && password === 'password123') {
        res.send('Login successful');
    } else {
        res.send('Invalid credentials');
    }
});

// Start the server
app.listen(port, () => {
    console.log(`Server is running at http://localhost:${port}`);
});
