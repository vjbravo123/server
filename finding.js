let client=require("./client");
// let collection_reference = client.db('login').collection('users');
// let collection_reference = client.db('login').collection('students_login');

//filter for finding

const finding = async(name,password,tablename)=>{
    let collection_reference = client.db('login').collection(tablename);
    const filter = {"name":name,"password":password}
    try{
      let docCount = await collection_reference.countDocuments(filter);
      let result = await collection_reference.find(filter).toArray();
      console.log(`found ${docCount} Documents :`);
      let docs = result;
    //   console.log(docs)
    //   console.log(filter)

      //this is to store true or false based on login accepted or rejected
      let x =(docs.length > 0);


      let obj = { vall:x , rollno:docs[0].roll_no }
      
      console.log(obj);
    //   console.log(x)
      return (obj);
        }
    catch(err){
        console.log("404 error:"+err)
    }

}
module.exports = finding;