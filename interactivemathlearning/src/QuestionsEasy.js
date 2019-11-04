import React from 'react';
import {makeStyles} from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import AppBarCustom from "./AppBarCustom";
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';


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
    },
    card: {
        minWidth: 275,
    },
    bullet: {
        display: 'inline-block',
        margin: '0 2px',
        transform: 'scale(0.8)',
    },
    pos: {
        marginBottom: 12,
    },
}));

export default function FirstGradeMenu() {
    const classes = useStyles();

    return (
        <div>
            <AppBarCustom/>
            <div style={{width: "150px", marginLeft: "610px"}}>

                <Card className={classes.card} align="center" style={{marginTop: "275px"}}>
                    <CardContent>
                        <Typography className={classes.title} color="textSecondary" gutterBottom>
                            Under Construction
                        </Typography>
                        <Typography variant="h5" component="h2">
                            This page is still under progress
                        </Typography>
                    </CardContent>
                </Card>
            </div>


        </div>
    );
}