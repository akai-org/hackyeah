const express = require('express');
const app = express();
const Database = require('./database');

const db = new Database;

const dataSeed = require('./dataSeed');
dataSeed(db);

// app.get('/', function (req, res) {
//   res.send('Hello World!');
// });

app.listen(3005, () => {
  console.log('Example app listening on port 3005!');
});

app.use(express.static('build'));