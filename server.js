const express = require('express');
const logger = require('morgan');
const mongoose = require('mongoose');
const app = express();

// Locally it's 3000, when deployed you need MONGODB_URI
const PORT = process.env.PORT || 3000;

const db = require("./models");



app.use(logger('dev'));
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(express.static('public'));

mongoose.connect(
    process.env.MONGODB_URI || 'mongodb://localhost/the-workouts-tracker',
    {
      useNewUrlParser: true,
      useUnifiedTopology: true,
      useCreateIndex: true,
      useFindAndModify: false
    }
  );

app.use(require('./routes/apiRoutes.js'));
app.use(require('./routes/frontendRoutes.js'));

app.listen(PORT, () => {
    console.log(`App running on ${PORT}`);
});