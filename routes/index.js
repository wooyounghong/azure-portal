const express = require('express');
const path = require('path');
const bodyParser = require('body-parser');

const app = express();

const $PORT = process.env.PORT || 5000;

app.get('/api', (req, res, next) => {
  try {
    res.send('/GET API routes here');
  } catch (error) {
    next(error);
  }
});

app.get('*', (req, res, next) => {
  try {
    res.send('root page here');
  } catch (error) {
    next(error);
  }
});

app.listen($PORT, () => {
  console.log('app is listening at', $PORT);
});
