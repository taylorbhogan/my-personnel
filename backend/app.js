const express = require("express");
const cookieParser = require('cookie-parser')
const cors = require('cors')
const mongoose = require('mongoose')

const app = express();

const {environment, mongoURI} = require('./config')
const isProduction = environment === 'production';

app.use(cookieParser());
app.use(express.json());

if (!isProduction){
  app.use(cors());
}

mongoose.connect(mongoURI, {useNewUrlParser:true})
  .then(() => console.log("Connected to MongoDB successfully"))
  .catch(err => console.log("error:",err))


app.get('/api/', (req, res) => {
  return res.json('express response')
})

// export app to be started by bin
module.exports = app;
