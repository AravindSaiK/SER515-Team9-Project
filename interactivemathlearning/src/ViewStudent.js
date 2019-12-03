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





function createData(fullName, userName, Grade) {
  return { fullName, userName, Grade  };
}

const deleteUser = (username,name) => {
axios.delete('http://localhost:3001/deleteStudent/',{ data: { id: username }})
    .then(res => {
      window.location.reload(false);
        alert(name+" deleted successfully")
    });
}

export default function ViewStudent(grade) {
    var [data,updateData] = useState([])
    var rows = []
    const classes = useStyles();
    var gradeLevel = grade.location.state

    useEffect(() => {
    // code to run on component mount
    axios.get('http://localhost:3001/viewStudent')
    .then(response =>  {
        updateData(data.concat(response.data))
        //console.log(data)
    }
   )
  }, [])
data.forEach((userData, i) => {
    rows.push(createData(userData.user.fullname, userData.user.username, userData.user.grade));
 });

    return (
      <div >
        <AppBarCustom gradeLevel={gradeLevel}/>
            <div align="center" style={{marginTop: "75px",  marginLeft:"270px", width:"1000px", align:"center"}}align="center">
                
                <Table className={classes.table} aria-label="simple table" >
        <TableHead>
          <TableRow style={{border:"2px #000 solid", backgroundColor:"#000"}}>
            <TableCell style={{border:"1px #fff solid",  color:"#fff"}}>Full Name</TableCell>
            <TableCell style={{border:"1px #fff solid",  color:"#fff"}} align="center">Username</TableCell>
            <TableCell style={{border:"1px #fff solid",  color:"#fff"}} align="center">Grade</TableCell>
            <TableCell style={{border:"1px #fff solid",  color:"#fff"}} align="center">Option</TableCell>
           
          </TableRow>
        </TableHead>
        <TableBody>

         {

            rows.length == 0 ? <TableRow><TableCell style={{border:"1px #000 solid"}} align="center" colSpan="4"><h3>No User exists in DB</h3></TableCell></TableRow> : 
            rows.map(row => (
            <TableRow key={row.fullName}>
              <TableCell style={{border:"1px #000 solid"}}  component="th" scope="row">
                {row.fullName}
              </TableCell>
              <TableCell style={{border:"1px #000 solid"}}  align="center">{row.userName}</TableCell>
              <TableCell style={{border:"1px #000 solid"}}  align="center">{row.Grade}</TableCell>
              <TableCell style={{border:"1px #000 solid"}}  align="center"><Button variant="contained" color="secondary" onClick={param => deleteUser(row.userName, row.fullName)}>
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