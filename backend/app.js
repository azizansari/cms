require("dotenv").config();
const express = require("express");
const path = require('path')
const api = require("./src/routes/api");
const app = express();
const cors = require("cors");
global._ = require('lodash');
const bodyParser = require('body-parser');
require("./config/db");
require('./config/winston');

// function exitHandler(options) {
//   mongoose.connection.close();
//   process.exit();
// }
// process.on('SIGINT', exitHandler.bind(null, { cleanup: true }));

app.set('port', process.env.PORT);
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(bodyParser.json({ limit: '1gb' }));
app.use(bodyParser.urlencoded({ extended: false, limit: '1gb' }));
app.use(cors());
app.use("/api/v1", api);
app.use(require("./src/middleware/errorHandler"));
app.all('/*', (req, res, next) => {
  res.header('Access-Control-Allow-Origin', '*');
  res.header('Access-Control-Request-Headers', '*');
  res.header(
    'Access-Control-Allow-Headers',
    'Origin, X-Requested-With, Content-Type, Accept, Access-Control-Allow-Headers, x-auth-token, x-l10n-locale, Cache-Control, timeout'
  );
  res.header('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE');
  res.set('Cache-Control', 'no-store, no-cache, must-revalidate, private');
  next();
});

app.use(express.static(path.join(__dirname, "./dist")));
app.use("*", (req, res) => {
  res.statusCode = 200;
  res.sendFile(path.join(__dirname, "./dist/index.html"));
});
module.exports = app;
