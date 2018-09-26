
function getDefaultUrl() {
    return connectToMongo()
        .then(db => {
            const collection = db.collection('url');
            var res = collection.find({}).toArray()
            console.log('res from mongodb', res);
            return res; 
        })
}


function getUrl(url) {
    console.log('service back$$$$$', url); 
    return Promise.resolve({url: url});
}

module.exports = {
    getDefaultUrl,
    getUrl
}

function connectToMongo() {
    const MongoClient = require('mongodb').MongoClient;
    const url = 'mongodb://adigon:galapro1@ds115353.mlab.com:15353/galapro';
    const dbName = 'galapro';
    return MongoClient.connect(url)
        .then(client => client.db(dbName))
}