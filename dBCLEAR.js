let client = require("./client");

const emptymaker = async () => {
    // specify the collection to update
    const collection = client.db("attendance").collection("attendance");
    //getting array of all documents in attendance collection
    const documents = await collection.find().toArray();

    for (let i = 0; i < documents.length; i++) {
        let f = { sno: documents[i].sno }
        let update = { $set: { date: "", attendance_status: "" } };
        const result = await collection.updateOne(f, update);
    }
    console.log("every values inside date and attendace status are empty now")

}

emptymaker();