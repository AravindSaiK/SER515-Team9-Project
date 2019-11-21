import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Button from "@material-ui/core/Button";
import { Link } from "react-router-dom";
import AppBarCustom from "./AppBarCustom";

/**
 * @author Aravinda Sai Kondamari
 * Since Nov 3,2019
 */

const useStyles = makeStyles(theme => ({
  root: {
    flexGrow: 1
  },
  menuButton: {
    marginRight: theme.spacing(2)
  },
  title: {
    flexGrow: 1
  },
  buttonClass: {
    margin: "40px",
    color: "#fff",
    textDecoration: "none"
  }
}));

export default function TakeQuizFirstGrade() {
  const classes = useStyles();
  return (
    <div >
      <AppBarCustom />
      <div align="center" style={{ marginTop: "275px" }}>
        <Button
          variant="contained"
          color="default"
          className={classes.buttonClass}
        >
          <Link to="/EasyFirst">Easy</Link>
        </Button>
        <Button
          variant="contained"
          color="default"
          className={classes.buttonClass}
        >
          <Link to="/MediumFirst">Medium</Link>
        </Button>
        <Button
          variant="contained"
          color="default"
          className={classes.buttonClass}
        >
          <Link to="/AdvancedFirst">Advanced</Link>
        </Button>
      </div>
    </div>
  );
}
