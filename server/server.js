// import express and cors
const express = require('express');
const cors = require('cors')

// import article routes
const articleRoutes = require('./routes/articleRoutes')

// Set up express app
const app = express();

// Set up cors to enable Cross Origin Resource Sharing for frontend
app.use(cors());

// Serve the routes using express router
app.use('/api/v1', articleRoutes);

// set up the port server
const PORT = 8000;


app.listen(PORT, () => console.log(`Server started on port: ${PORT}`));