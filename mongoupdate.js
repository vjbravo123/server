let client = require("./client");

const updateAttendanceStatus = async (attendanceData) => {
    let b=[];
    let docs = [];
    const collection = client.db("attendance").collection("students_attendance");
    const collection2 = client.db("attendance").collection("attendance");
    

    for (let i = 0; i < attendanceData.length; i++) {
        let roll = attendanceData[i].roll_no;
        b.push(roll)   
    }


let today = new Date();
const dateString = `${today.getDate()}/${today.getMonth() + 1}/${today.getFullYear()}`;
let documents = await collection.find().toArray();

for (let i = 0; i < documents.length; i++) {
    if( b.includes( documents[i].roll_no)){
        let obj = {sno: documents[i].sno , roll_no:documents[i].roll_no , date : dateString , attendance_status :"Present" }
        docs.push(obj)
        // await collection2.insertOne(obj);
    }
    else{
        let obj = { sno: documents[i].sno ,roll_no:documents[i].roll_no , date : dateString , attendance_status :"Absent" }
        docs.push(obj)
        // await collection2.insertOne(obj);
    }
}
console.log(docs.length)
docs.sort((a, b) => a.sno - b.sno); 
await collection2.insertMany(docs);

}
module.exports = updateAttendanceStatus;



// let b = [];

// // specify the collection to update
// const collection = client.db("attendance").collection("attendance");
// const collection2 = client.db("attendance").collection("students_attendance");


// // //todays date string
// let today = new Date();
// const dateString = `${today.getDate()}/${today.getMonth() + 1}/${today.getFullYear()}`;


// //Making array of numbers of all sno provided in the data
// for (let i = 0; i < attendanceData.length; i++) {
//     let c = attendanceData[i].sno;
//     b.push(c)
// }


// //getting array of all documents in attendance collection
// const documents = await collection.find().toArray();
// const documents2 = await collection2.find().toArray();

// for (let i = 0; i < b.length; i++) {
//     obj={ sno : b[i] , date : dateString , attendance_status : "present" }
//     let result = await collection.insertOne(obj) 
// }

// for (let i = 0; i < documents2.length; i++) {
//     if(b.includes(documents2[i].sno)){
//         continue
//     }
//     else{
//         obj={ sno : b[i] , date : dateString , attendance_status : "Absent" }
//         let result = await collection.insertOne(obj)  

//     }
    
// }

// }













// const documents = await collection2.find().toArray();




// let documents2  = await collection2.find().toArray();
// // console.log(documents2);

// //Making array of numbers of all sno provided in the data
// for (let i = 0; i < attendanceData.length; i++) {
//     let c = attendanceData[i].sno;
//     b.push(c)
// }




// for (let i = 1; i <86; i++) {
//     if(b.includes(i)){
//     obj={ sno : i , date : dateString , attendance_status : "Present" }
//     let result =await collection.insertOne(obj)
// }
//     else{
//         obj={ sno : i , date : dateString , attendance_status : "Absent" }
//         let result = collection.insertOne(obj)  
//     }
// }