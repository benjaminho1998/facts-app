const express = require('express');
const axios = require('axios');
const app = express(); 

//Set up Express/Node.js proxy backend to receive API requests from the front end, and then call the Panda API to get around the CORS restrictions

app.use(function(req, res, next) {
  res.header('Access-Control-Allow-Origin', '*');
  res.header('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept');
  next();
});

app.get('/pandas', (req, res) => {
  axios.get('https://some-random-api.ml/facts/panda')
    .then(response => {
      res.json(response.data);
    })
});

const PORT = process.env.PORT || 3001;
app.listen(PORT, () => console.log(`listening on ${PORT}`));