const client = require("./client");

const signup_details = async (obj,db,collection) =>{
    const collection_reference = client.db(db).collection(collection);
    await collection_reference.insertOne(obj);
    console.log(`data is inserted in the ${db} database in ${collection} collection `);
}

module.exports = signup_details;