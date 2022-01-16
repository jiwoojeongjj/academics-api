const express = require('express');
const cors = require('cors');

// Allows us to construct schemas that define the structure of the documents in MongoDB
// Models can be defined using these schemas
// These models will serve as interfaces that allow us to perform CRUD operations to the MongoDB
const mongoose = require('mongoose');

// To use the environment variables that store sensitive information
require('dotenv').config();

// Importing the routers 
const lecturesRouter = require('./routes/lectures');
const assessmentsRouter = require('./routes/assessments');

// Making a connection to the MongoDB Atlas database
const URI = process.env.MONGODB_ATLAS_URI;
mongoose.connect(URI);

// Creating the server
const app = express();

// Appropriate middlewares
app.use(cors());
app.use(express.json());

// Routing different endpoints to their respective routers
app.use('/lectures', lecturesRouter);
app.use('/assessments', assessmentsRouter);

// The server will be listening to port 3001 (localhost)
app.listen(3001, () => {
    console.log('server is running');
})