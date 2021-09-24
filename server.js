const express = require('express');
const logger = require('morgan');
const mongoose = require('mongoose');

// Locally it's 3000, when deployed you need MONGODB_URI
const PORT = 3000;

app.use(logger('dev'));

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.use(express.static('public'));

mongoose.connect('mongodb://localhost/workout', {
    useNewUrlParser: true,
    useFindAndModify: false
});

app.use(require('./routes/apiRoutes.js'));
app.use(require('./routes/frontendRoutes.js'));

app.listen(PORT, () => {
    console.log(`App running on ${PORT}`);
});