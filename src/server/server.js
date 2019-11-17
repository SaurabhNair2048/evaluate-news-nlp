var path = require('path')
const dotenv = require('dotenv');
dotenv.config();
const express = require('express')
const mockAPIResponse = require('./mockAPI.js')
var aylien = require("aylien_textapi");

var textapi = new aylien({
    application_id: process.env.API_ID,
    application_key: process.env.API_KEY
});

const app = express()

app.use(express.static('dist'))

console.log(__dirname)

app.get('/', function (req, res) {
    res.sendFile('dist/index.html')
})

app.get('/test', function (req, res) {
    console.log(mockAPIResponse);
    res.send(mockAPIResponse);
})

app.get('/api', function(req, res){
    let result = '';
    console.log(textapi._options);
    textapi.sentiment({
        url: 'https://www.techradar.com/in/news/whatsapp-dark-mode-is-nearly-here-as-new-finishing-touches-appear',
        mode: 'document'
      }, function(error, response) {
        if (error === null) {
          console.log(response);
          res.send(response);
        }
      });
});

module.exports = app