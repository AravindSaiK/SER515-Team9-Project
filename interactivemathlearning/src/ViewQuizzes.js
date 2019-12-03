import React, {useEffect, useState} from 'react';
import {makeStyles} from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import {Link} from "react-router-dom";
import AppBarCustom from "./AppBarCustom";
import axios from "axios"
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';

/**
 * @author Nikhila Saini
 * Since Nov 3,2019
 */

const useStyles = makeStyles({
  root: {
    width: '100%',
    overflowX: 'auto',
  },
  table: {
    minWidth: 650,
  },
  
});





function createData(quizName, Grade) {
  return { quizName, Grade };
}

const deleteQuiz = (quizName) => {
axios.delete('http://localhost:3001/deleteQuiz/',{ data: { id: quizName }})
    .then(res => {
      window.location.reload(false);
        alert(quizName+" deleted successfully")
    });
}

export default function ViewQuizzes(grade) {
    var [data,updateData] = useState([])
    var rows = []
    const classes = useStyles();
    var gradeLevel = grade.location.state

    useEffect(() => {
    // code to run on component mount
    axios.get('http://localhost:3001/viewQuizzes')
    .then(response =>  {
        updateData(data.concat(response.data))
        //console.log(response)
    }
   )
  }, [])
data.forEach((quizData, i) => {
    rows.push(createData(quizData.quiz.quizName, quizData.quiz.grade));
 });

    return (
      <div >
        <AppBarCustom gradeLevel={gradeLevel}/>
            <div align="center" style={{marginTop: "75px",  marginLeft:"450px", width:"400px", align:"center"}} align="center">
                
                <Table className={classes.table} aria-label="simple table">
        <TableHead>
          <TableRow style={{border:"2px #000 solid", backgroundColor:"#000"}}>
            <TableCell style={{border:"1px #fff solid",  color:"#fff"}} >Quiz Name</TableCell>
            <TableCell style={{border:"1px #fff solid",  color:"#fff"}} align="right">Grade</TableCell>
            <TableCell style={{border:"1px #fff solid",  color:"#fff"}} align="right">Option</TableCell>
           
          </TableRow>
        </TableHead>
        <TableBody>

         {

            rows.length == 0 ? <TableRow><TableCell style={{border:"1px #000 solid"}} align="center" colSpan="4"><h3>No Quiz exists in DB</h3></TableCell></TableRow> : 
            rows.map(row => (
            <TableRow  key={row.quizName}>
              <TableCell style={{border:"1px #000 solid"}} component="th" scope="row">
                {row.quizName}
              </TableCell>

              <TableCell style={{border:"1px #000 solid"}} align="right">{row.Grade}</TableCell>
              <TableCell style={{border:"1px #000 solid"}} align="right"><Button variant="contained" color="secondary" onClick={param => deleteQuiz(row.quizName)}>
  Delete
</Button></TableCell>
            </TableRow>
          ))}

        </TableBody>
      </Table>


            </div>
        </div>
    );
}