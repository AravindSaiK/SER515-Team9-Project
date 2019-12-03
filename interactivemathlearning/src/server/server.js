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

app.get('/viewStudent', function(req, res) {
    let rawdata = fs.readFileSync('users.json');
    let student = JSON.parse(rawdata);
    res.writeHead(200, {
        'Content-Type': 'application/json',
    });
    res.end(JSON.stringify(student));
});

app.delete('/deleteStudent', function(req,res){
    let rawdata = fs.readFileSync('users.json');
    let student = JSON.parse(rawdata);
    /*console.log(req.body.id)
    */
    for(var i=0; i<student.length;i++) {
        if(student[i].user.username == req.body.id){
            student.splice(i,1)
        }

    }
    fs.writeFileSync('users.json', JSON.stringify(student),{encoding:'utf8',flag:'w'});
    rawdata = fs.readFileSync('users.json');
    student = JSON.parse(rawdata);
    res.status(200).json({"data": student})

})

/**
 All Quiz Handled Functions
 */



app.post('/createQuiz', function(req, res) {


    let rawdata = fs.readFileSync('quizData.json');
    let quiz = JSON.parse(rawdata);
    /*console.log(student)
    */
    for(var i=0; i<quiz.length;i++) {
        if(quiz[i].quiz.quizName == req.body.quizName){
            res.status(500).json({"message": "Quiz already exists"})
            return
        }
    }
    quizzes = quiz
    let newQuiz =  {
        quiz: req.body
    }
    quizzes.push(newQuiz)
    fs.writeFileSync('quizData.json', JSON.stringify(quizzes));

    res.status(200).json({"message": "Quiz Added successfully"})
});


app.get('/viewQuizzes', function(req, res) {
    let rawdata = fs.readFileSync('quizData.json');
    let quizzes = JSON.parse(rawdata);
    res.writeHead(200, {
        'Content-Type': 'application/json',
    });
    res.end(JSON.stringify(quizzes));
});


app.delete('/deleteQuiz', function(req,res){
    let rawdata = fs.readFileSync('quizData.json');
    let quizzes = JSON.parse(rawdata);
    /*console.log(req.body.id)
    */
    for(var i=0; i<quizzes.length;i++) {
        if(quizzes[i].quiz.quizName == req.body.id){
            quizzes.splice(i,1)
        }

    }
    fs.writeFileSync('quizData.json', JSON.stringify(quizzes),{encoding:'utf8',flag:'w'});
    rawdata = fs.readFileSync('quizData.json');
    quizzes = JSON.parse(rawdata);
    res.status(200).json({"data": quizzes})

})

app.get('/viewQuizzesFirstGrade', function(req, res) {
    let quizzes = []
    let rawdata = fs.readFileSync('quizData.json');
    let quizData = JSON.parse(rawdata);

    for(var i=0; i<quizData.length;i++) {
        if(quizData[i].quiz.grade == "First Grade"){
            /*res.status(500).json({"message": "Quiz already exists"})
         return*/

            quizzes.push(quizData[i])
        }
    }


    res.writeHead(200, {
        'Content-Type': 'application/json',
    });
    res.end(JSON.stringify(quizzes));
});


app.get('/viewQuizzesThirdGrade', function(req, res) {
    let quizzes = []
    let rawdata = fs.readFileSync('quizData.json');
    let quizData = JSON.parse(rawdata);

    for(var i=0; i<quizData.length;i++) {
        if(quizData[i].quiz.grade == "Third Grade"){
            /*res.status(500).json({"message": "Quiz already exists"})
         return*/

            quizzes.push(quizData[i])
        }
    }


    res.writeHead(200, {
        'Content-Type': 'application/json',
    });
    res.end(JSON.stringify(quizzes));
});

app.get('/takeQuiz', function(req, res) {



    let rawdata = fs.readFileSync('quizData.json');
    let quiz = JSON.parse(rawdata);
    /*console.log(student)
    */
    for(var i=0; i<quiz.length;i++) {
        if(quiz[i].quiz.quizName == req.query.id){
            res.status(200).json({"data": quiz[i]})
            return
        }
    }
    //console.log(req.query.id)
    res.status(500).json({"data": "Quiz Doesn't Exist"})

    /*let rawdata = fs.readFileSync('quizData.json');
    let quizzes = JSON.parse(rawdata);
    res.writeHead(200, {
        'Content-Type': 'application/json',
      });
      res.end(JSON.stringify(quizzes));  */
});
