
function getDefaultUrl() {
    return connectToMongo()
        .then(db => {
            const collection = db.collection('url');
            var res = collection.find({}).toArray()
            console.log('res from mongodb', res);
            return res; 
        })
}


function resolveAfter2Seconds() {
    return new Promise(resolve => {
      setTimeout(() => {
        resolve('resolved');
  
      }, 2000);
    });
}
function getUrl(url) {
    if (url) {
        return new Promise(resolve => {
            setTimeout(() => {
              resolve(url);
            }, 2000);
            // return {"url": url}
        });
    }
}

module.exports = {
    getDefaultUrl,
    getUrl
}

function connectToMongo() {
    const MongoClient = require('mongodb').MongoClient;
    // const url = 'mongodb://localhost:27017'; //15353
    const url = 'mongodb://adigon:galapro1@ds115353.mlab.com:15353/galapro';
    const dbName = 'galapro';
    return MongoClient.connect(url)
        .then(client => client.db(dbName))
}