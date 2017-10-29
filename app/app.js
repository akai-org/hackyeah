const express = require('express');
const app = express();
const Database = require('./database');

const db = new Database;

const dataSeed = require('./dataSeed');
dataSeed(db);

const cors = require('cors');
app.use(cors());

app.listen(3005, () => {
  console.log('Example app listening on port 3005!');
});

app.get('/api/stats', (req, res) => {
  res.json( db.get(`/app/stats`) );
});

app.get('/api/users', (req, res) => {
  console.log( db.get(`/app/users`) );
  res.json( db.get(`/app/users`));
});

app.get('/api/users/:name', (req, res) => {
  res.json( db.get(`/app/users/${req.params.name}`));
});

app.use(express.static('build'));