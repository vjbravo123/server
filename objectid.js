let client = require("./client");
let collection_reference = client.db('attendance').collection('students_attendance');

const objectid = async ()=>{
    
  // Define the fields to retrieve
  const projection = { rollno: 1, name: 1, _id: 1 };

  // Query the collection to retrieve the specified fields for all documents
//   await collection_reference.find({}, projection).toArray(function(err, docs)
 let result = collection_reference.find({}, projection) 
 let docs = await result.toArray();
 for (let i = 0; i < docs.length; i++) {
  console.log(docs[i])
  
 }
}
objectid();