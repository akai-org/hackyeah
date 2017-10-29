const express = require('express');
const app = express();
const Database = require('./database');

const db = new Database;

const dataSeed = require('./dataSeed');
dataSeed(db);

const cors = require('cors');
app.use(cors());
// app.get('/', function (req, res) {
//   res.send('Hello World!');
// });

app.listen(3005, () => {
  console.log('Example app listening on port 3005!');
});

app.get('/api/:path', (req, res) => {
  const path = req.param('path');
  const data = db.get(`/app/${path}`);
  console.log(data);
  res.json(data);
});

app.use(express.static('build'));