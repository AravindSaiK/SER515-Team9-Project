import React, { Component } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import { Link } from "react-router-dom";
import AppBarCustom from "./AppBarCustom";

/**
 * @author Tharun Chintham
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

export default function TakeQuizThirdGrade() {
    const classes = useStyles();

    return (
      <div >
        <AppBarCustom/>
            <div align="center" style={{ marginTop: "275px" }}>
                <Button variant="contained" color="default" className={classes.buttonClass} ><Link to="/EasyThird">Easy</Link></Button>
                <Button variant="contained" color="default" className={classes.buttonClass} ><Link to="/MediumThird">Medium</Link></Button>
                <Button variant="contained" color="default" className={classes.buttonClass} ><Link to="/AdvancedThird">Advanced</Link></Button>

            </div>
        </div>
    );
}