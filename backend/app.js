const express = require("express");
const cookieParser = require("cookie-parser");
const cors = require("cors");
const app = express();
const routes = require('./routes')

const { environment } = require("./config");
const isProduction = environment === "production";

app.use(cookieParser());
app.use(express.json());

if (!isProduction) {
  app.use(cors());
}

app.use(routes)

// export app to be started by bin
module.exports = app;
