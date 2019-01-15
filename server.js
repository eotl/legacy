const express = require('express');
const app = express();
const path = require('path');
const port = process.env.PORT || 2080;

app.use('/', express.static(path.join(__dirname, '/public')));

app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname+'/public/index.html'));
});

app.listen(port, (req, res) => {
  console.log( `server listening on port: ${port}`);
});