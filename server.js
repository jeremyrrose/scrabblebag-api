const express = require('express');
const routes = require('./routes');
const PORT = process.env.PORT || 3000;
const db = require("./db/index");
const morgan = require('morgan');
const cors = require('cors');
const bodyParser = require('body-parser');
const Game = require('./models/game');

const app = express();
app.use(cors(['http://jeremy-rose.com','localhost']));
app.use(morgan("dev"));
app.use(bodyParser.json());
app.use('/api', routes);

db.on('error', console.error.bind(console, 'MongoDB connection error:'))

app.listen(PORT, () => {
  console.log(`Express server listening on port ${PORT}`);
});
