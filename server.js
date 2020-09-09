const express = require('express');
const cors = require('cors');
const morgan = require('morgan');
const helmet = require('helmet')

// Init Express
const app = express();

// Import Routes
const searchRoutes = require('./routes/index');

// App Middlewear
app.use(express.urlencoded({extended: true}))
app.use(express.json())
app.use(cors())
app.use(helmet());
app.use(morgan('dev'));

// Use routes
app.use('/', searchRoutes);

const PORT = process.env.PORT || 8080;
app.listen(PORT, () => console.log(`Server running on port: ${PORT}`));

module.exports = server;