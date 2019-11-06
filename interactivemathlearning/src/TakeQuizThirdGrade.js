import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
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