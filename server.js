const express = require('express');
const routes = require('./routes');
const PORT = process.env.PORT || 3000;
const db = require("./db/index")
let morgan = require('morgan');
const bodyParser = require('body-parser');
const Game = require('./models/game');

const app = express();
app.use(morgan("default"));
app.use(bodyParser.json());
app.use('/api', routes);

db.on('error', console.error.bind(console, 'MongoDB connection error:'))

app.listen(PORT, () => {
  console.log(`Express server listening on port ${PORT}`);
});