const express = require('express');
const path = require('path');
const axios = require('axios');

const app = express();
const port = 6969

app.use(express.static(path.join(__dirname, '../public')));

app.get('/api/v1/listings', (req, res) => {
  axios.get('http://localhost:3000' + req.url)
    .then((response) => {
      res.send(response.data);
    })
    .catch((error) => {
      res.sendStatus(500);
    })
});

app.get('/v1/api/:accommodationId/reviews', (req, res) => {
  axios.get('http://localhost:2020' + req.url)
    .then((response) => {
      res.send(response.data);
    })
    .catch((error) => {
      res.sendStatus(500);
    })
});

app.get('/getHomes', (req, res) => {
  axios.get('http://localhost:4321' + req.url)
    .then((response) => {
      res.send(response.data);
    })
    .catch((error) => {
      res.sendStatus(500);
    })
});

app.listen(port, () => console.log(`Example app listening on port ${port}!`));
