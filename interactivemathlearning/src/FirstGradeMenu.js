import React from 'react';
import {makeStyles} from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import {Link} from "react-router-dom";

/**
 * @author Nikhila Saini
 * Since Nov 3,2019
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

export default function FirstGradeMenu() {
    const classes = useStyles();

    return (
        <div className={classes.root}>
            <AppBar position="static">
                <Toolbar>
                    <Typography variant="h6" className={classes.title}>
                        Interactive Math Learning
                    </Typography>
                    <Button color="inherit">Logout</Button>
                </Toolbar>
            </AppBar>
            <div align="center" style={{marginTop: "275px"}}>
                <Button variant="contained" color="default" className={classes.buttonClass}><Link
                    to="/PracticeFirstGrade">Practice Quiz</Link></Button>
                <Button variant="contained" color="default" className={classes.buttonClass}><Link
                    to="/TakeQuizFirstGrade">Take Quiz</Link></Button>
            </div>
        </div>
    );
}