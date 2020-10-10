const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const path = require('path');

//const restorans = require('./routes/api/restorans');

const app = express();

// Body parser middleware
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());


// DB Config
const db = require('./config/keys').mongoURI;


// Connect to MongoDB
mongoose
  .connect(db, {useNewUrlParser: true, useUnifiedTopology: true})
  .then(() => console.log('MongoDB Connected'))
  .catch(err => console.log(err));

// Use Routes
//app.use('/api/restorans', restorans);

app.use('/api/restorans', require(process.cwd() + '/routes/api/restorans/route.js'));


const port = process.env.PORT || 3000;

app.listen(port, () => console.log(`Server running on port ${port}`));