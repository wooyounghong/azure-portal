const express = require('express');
const path = require('path');
const bodyParser = require('body-parser');

const app = express();
// Serve static files from the React frontend app
app.use(express.static(path.join(__dirname, '../client/build')));
// Anything that doesn't match the above, send back index.html
const $PORT = process.env.PORT || 5000;

app.get('/api', (req, res, next) => {
  try {
    res.send('/GET API routes here');
  } catch (error) {
    next(error);
  }
});

app.get('*', (req, res) => {
  try {
    res.sendFile(path.join(__dirname + '../client/build/index.html'));
  } catch (error) {
    next(error);
  }
});

app.listen($PORT, () => {
  console.log('app is listening at', $PORT);
});
