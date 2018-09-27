const express = require('express')
var bodyParser = require('body-parser')

const urlService = require('./services/urlService')
const app = express()
const cors = require('cors');

app.use(cors());
app.use(bodyParser.json());
// app​.​use​(​express​.​static​(​'dist'​)); 

//app.get('/', (req, res) => res.send('url'))

app.post('/url', (req, res) => {
    urlService.getUrl(req.body.url)
        .then((getUrlResult) => {
            console.log('server after $$$$:', getUrlResult.url)
            res.end(getUrlResult.url);
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
// const port = process.env.PORT || 3000;
// http.listen(port, () => {
//   console.log(`App listening on port ${port}!`)
// });
 
app.listen(3001, () => console.log('Example app listening on port 3001!'))