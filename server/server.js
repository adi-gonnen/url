const express = require('express')
var bodyParser = require('body-parser')

const urlService = require('./services/urlService')
const app = express()
const cors = require('cors');

app.use(cors());
app.use(bodyParser.json())

app.get('/', (req, res) => res.send('url'))

app.get('/url', (req, res) => {
    console.log('url server'); 
    urlService.getUrl(req.body)
        .then(res => {
            console.log('server after $$$$:', res)
            res.json(res)
        })
})

app.get('/dUrl', (req, res) => {
    console.log('default url server');    
    urlService.getDefaultUrl()
        .then(url => {
            console.log('server after @@:', url[0].url)
            res.json(url)
        })
})
app.listen(3001, () => console.log('Example app listening on port 3001!'))