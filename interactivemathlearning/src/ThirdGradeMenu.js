import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import { Link } from "react-router-dom";
import AppBarCustom from "./AppBarCustom";

/**
 *   @Author: Krishna Gurram
 *   Since: November 3, 2019
 */

const useStyles = makeStyles(theme => ({
    root: {
        flexGrow: 1,
    },
    menuButton: {
        marginRight: theme.spacing(2),
    },
    title: {
        flexGrow: 1,
    },
    buttonClass: {
        margin: "40px",
        color: "#fff",
        textDecoration: "none"
    }
}));

export default function ThirdGradeMenu(grade) {
    const classes = useStyles();
    var gradeLevel = grade.location.state

    return (
       <div >
        <AppBarCustom gradeLevel={gradeLevel}/>
<div align="center" style={{marginTop: "275px"}}>
            <Button  variant="contained" color = "default" className={classes.buttonClass} ><Link to="/PracticeThirdGrade">Playground</Link></Button>
            <Button variant="contained" color = "default"  className={classes.buttonClass} ><Link to="/TakeQuizThirdGrade" >Take Quiz</Link></Button>
</div>
        </div>
    );
}