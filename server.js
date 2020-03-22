const express = require('express');
// const request = require('request');
const axios = require('axios');

const app = express();

app.use(function(req, res, next) {
  res.header('Access-Control-Allow-Origin', '*');
  res.header('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept');
  next();
});

app.get('/', function(req, res){
  res.sendFile(__dirname+'/bin/index.html'); 
});

app.get('/pandas', (req, res) => {
  axios.get('https://some-random-api.ml/facts/panda')
    .then(response => {
      res.json(response.data);
    })
});

const PORT = process.env.PORT || 3001;
app.listen(PORT, () => console.log(`listening on ${PORT}`));