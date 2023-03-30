const client = require("./client")
const { ObjectId } = require("mongodb");
const collection = client.db("attendance").collection("attendance");

 // Define the ID to search for
//  const idToSearchFor =sid;

 // Search for the ID in the collection
//  let result = await collection_reference.findOne({ _id: new ObjectId(idToSearchFor)});

const queried_attendance_updater = async (documents)=>{
  for (let i = 0; i < documents.length; i++) {
    const idToSearchFor =documents[i]._id;
    let filter = { _id:new ObjectId(idToSearchFor) }
    let newValues = { $set: { attendance_status: documents[i].attendance_status }}
    let result = await collection.updateOne(filter, newValues);
    console.log(result.modifiedCount + " document(s) updated");
  }
}

module.exports = queried_attendance_updater;
