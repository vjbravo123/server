let client = require("./client");
let collection_reference = client.db('students_queries').collection('qurey_collection');

const querydeleter=(roll_no)=>{
    const filter = {roll_no:roll_no}
    collection_reference.deleteOne(filter)
}
module.exports = querydeleter;