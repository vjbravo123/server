const cors = require("cors");
const express = require("express");
const xlsx = require('xlsx');
const updateAttendanceStatus = require('./mongoupdate');
const queried_attendance_updater = require('./query_attendance_update');
const finding = require("./finding");
const querydeleter = require("./field_deleter");
const query_documents = require("./query_documents");
const signupidcheck = require("./signupidcheck");
const signup_details = require("./students_login");
const attendance_finder = require("./attendance_finder");
const excelmaker = require("./excelmaker")
const data = require("./sheet_data")
const app = express();
const PORT = 8000;
const bodyParser = require('body-parser');


// function to insert form data in mongodb      
const inserter = (arr) =>{
    insert(arr);
    console.log("successful")
}



//middlewares-------------
app.use(express.json());
app.use(cors());

// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false }));
// parse application/json
app.use(bodyParser.json());



//cross-orign request handler
const corsOptions = {
  origin:'http://localhost:3000',
  methods:['GET','POST'],
  allowedHeaders:['content-Type','Authorization']
};
app.use(cors(corsOptions));

//starting the server
//listening on port 3000
app.listen(PORT, ()=>{console.log(`RUNNING EXPRESS SERVER ON PORT ${PORT}`)});

app.get('/api/documents', async (req, res) => {
     let result = await query_documents();
    //  console.log(result)
      res.json(result);
    
   
  
});

app.post('/login',async (req,res)=>{
  const name = req.body.username;
  const password = req.body.password;
  let dc = finding(name,password,"users");
  let val =await dc.then();
  if (val===true) {
    let a = {"name":name,"password":password,"value":val}
    res.send(a);
  }
  else{
    let a = {"name":name,"password":password,"value":val}
    res.send(a);
  }
})

app.post('/queryattendance',async (req,res)=>{
  const roll_no = req.body.roll_no;

  //attendance_finder is returning a object obj = {present_count:present_count , result:result}
  let attendance = attendance_finder(roll_no);
    let attendance_obj = await attendance.then();
    let a = {attendance:attendance_obj.result}
    res.send(a);
  }
)
app.post('/querydelete',async (req,res)=>{
  const roll_no = req.body.roll_no;
  await querydeleter(roll_no);
  let a = {ans:"delted bro"}
    res.send(a);
  }
)
app.post('/queriedattendancechange',async (req,res)=>{
  const aob = req.body
 console.log(aob);
 await queried_attendance_updater(aob);
 let a = {ans:'donebro'}
res.send(a)
  // //attendance_finder is returning a object obj = {present_count:present_count , result:result}
  // let attendance = attendance_finder(roll_no);
  //   let attendance_obj = await attendance.then();
  //   let a = {attendance:attendance_obj.result}
  //   res.send(a);
  }
)

app.post('/studentslogin',async (req,res)=>{
  const name = req.body.username;
  const password = req.body.password;
  console.log(name,password);
  let dc = finding(name,password,"students_login");

//vall is an object containing these value { vall: true/false, rollno: '21/---' }
  let vall =await dc.then();
  let val = vall.vall;
  if (val===true) {
    //attendance_finder is returning a object obj = {present_count:present_count , result:result}
    let attendance = attendance_finder(vall.rollno);
    let attendance_obj = await attendance.then();
    let attendancevalue =attendance_obj.present_count;
    let attendance_data = attendance_obj.result;
    let a = {"name":name,"password":password,"value":val , attendance :attendancevalue ,attendance_data:attendance_data}
    res.send(a);
  }
  else{
    let a = {"name":name,"password":password,"value":val}
    res.send(a);
  }
})




// handling the data coming from html sign-up form using post method to /submit-form endpoint
app.post('/submit-form', async(req, res) => {
  const name = req.body.username;
  const password = req.body.password;
  const roll_no = req.body.roll_no;
  const id = req.body.id;
  
  let a = {name:name,password:password,roll_no:roll_no};
  let sid = id;
  let checkvalue = signupidcheck(sid);
  let promiseresolvedvalue = await checkvalue.then();
  let obj = {value:promiseresolvedvalue}
  if(promiseresolvedvalue){
   await signup_details(a,"login","students_login");
    res.send(obj)
    console.log("singup accepted")
  }
  else{
    console.log("singup rejected")
    res.send(obj)
  }
});

// handling the data coming from students dashboard (students queries)
app.post('/students-queries', async(req, res) => {
  const name = req.body.name;
  const email = req.body.email;
  const roll_no = req.body.roll_no;
  const question = req.body.question;
  
  let a = {name:name , email:email ,roll_no:roll_no,question:question};
  // let sid = id;
  // let checkvalue = signupidcheck(sid);
  // let promiseresolvedvalue = await checkvalue.then();
  // let obj = {value:promiseresolvedvalue}
  await signup_details(a ,"students_queries","qurey_collection")
  res.send({ans:"query submitted"})
});



app.post('/attendance',async (req, res) => {
  const  attendanceData  = req.body;
    // console.log(attendanceData);
    await updateAttendanceStatus(attendanceData);
    excelmaker(attendanceData,data,res);
    
  });
  
  

app.get("/",(req , res)=>{
  res.json({"name":"vivek"})
});
