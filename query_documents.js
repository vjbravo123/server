const { Collection } = require("mongodb")
const client = require("./client")

const query_documents = async ()=>{
   const collection = client.db("students_queries").collection("qurey_collection")
   const result = await collection.find().toArray()
  return result;
}

module.exports = query_documents;