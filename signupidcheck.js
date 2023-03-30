const { ObjectId } = require("mongodb");
const client = require("./client")
let collection_reference = client.db('attendance').collection('students_attendance');

const signupidcheck = async (sid) => {
  try {
    // Define the ID to search for
    const idToSearchFor =sid;

    // Search for the ID in the collection
    let result = await collection_reference.findOne({ _id: new ObjectId(idToSearchFor)});
    
    // Check if a matching document was found
    if (result) {
      console.log(`ID '${idToSearchFor}' exists in the collection`);
      console.log(result)
      return true;
    } else {
      console.log(`ID '${idToSearchFor}' does not exist in the collection`);
      return false;
    }
  } catch (err) {
    console.error(err);
    return false;
  } finally {
    // Close the connection to the database
    // client.close();
  }
}

module.exports = signupidcheck
