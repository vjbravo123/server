const {MongoClient}  = require('mongodb');
const uri = require("./atlas_uri")
console.log(uri);

const client = new MongoClient(uri);

client.connect((err) => {
    if (err) throw err;
    console.log('MongoDB Connected!');
  });
  

module.exports = client;
