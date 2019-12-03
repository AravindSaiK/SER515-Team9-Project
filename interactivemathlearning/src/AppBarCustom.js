import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import {Link} from "react-router-dom";

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
        color: "#fff",
        textDecoration:"none"
    }
}));

export default function AppBarCustom(gradeLevel) {
    const classes = useStyles();
    const grade = gradeLevel.gradeLevel
    return (
        <div className={classes.root}>
            <AppBar position="static">
                <Toolbar>
                    <Typography variant="h6" className={classes.title}>
                        Interactive Math Learning
                    </Typography>
                    <Typography style={{marginLeft:"-175px"}}variant="h6" className={classes.title}> {grade} </Typography>
                    <Button color="primary"><Link className={classes.buttonClass} to="/logout">Logout</Link></Button>
                </Toolbar>
            </AppBar>
        </div>
    );
}