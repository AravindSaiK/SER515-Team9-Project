import React , { Component } from 'react';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';

import {Link} from "react-router-dom";

export default function TakeQuizThirdGrade() {

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
            <Button  variant="contained" color = "default" className={classes.buttonClass} ><Link to="/EasyThird">Easy</Link></Button>
            <Button variant="contained" color = "default"  className={classes.buttonClass} ><Link to="/MediumThird">Medium</Link></Button>
            <Button variant="contained" color = "default"  className={classes.buttonClass} ><Link to="/AdvancedThird">Advanced</Link></Button>

</div>
        </div>
);
}