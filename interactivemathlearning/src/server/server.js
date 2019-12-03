'use strict';

const express = require('express');
const logger = require('morgan');
const cors = require('cors');

const app = express();
const fs = require('fs');

let users = []
let quizzes = []
//use cors to allow cross origin resource sharing
app.use(
  cors({
    origin: 'http://localhost:3000',
    credentials: true,
  })
);

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.listen(3001, () => {
  console.log('Server Listening on port 3001');
 
});

/**
All User Handled Functions
*/


app.post('/createUser', function(req, res) {


let rawdata = fs.readFileSync('users.json');
let student = JSON.parse(rawdata);
/*console.log(student)
*/
 for(var i=0; i<student.length;i++) {
 if(student[i].user.username == req.body.username){
    res.status(500).json({"message": "user already exists"})
 return
}
 }
 users = student
  let newUser =  {
  	user: req.body
  }
  users.push(newUser)
  fs.writeFileSync('users.json', JSON.stringify(users));

    res.status(200).json({"message": "User successfully registered"})
  //console.log(users)
});


app.post('/login', function(req, res) {


let status = 0 
let message = ""
let rawdata = fs.readFileSync('./users.json');
let student = JSON.parse(rawdata);
if(req.body.username == "admin" && req.body.password == "admin") {
 res.status(200).json({"grade": "Admin"})
    return
  }

 for(var i=0; i<student.length;i++) {
 if(student[i].user.username == req.body.username && student[i].user.password == req.body.password){
   res.status(200).json({"grade": student[i].user.grade})
    return
}
  
 }

 res.status(500).json({"message": "Username or password doesn't exist"})
 });

