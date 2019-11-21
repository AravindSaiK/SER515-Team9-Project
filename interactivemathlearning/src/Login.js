import React, { Component } from "react";
import TextField from "@material-ui/core/TextField";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import Button from "@material-ui/core/Button";
import useStyles from "./Login.css";
import { withStyles } from "@material-ui/core/styles";
import withWidth from "@material-ui/core/withWidth";
import Radio from '@material-ui/core/Radio';
import RadioGroup from '@material-ui/core/RadioGroup';
import FormHelperText from '@material-ui/core/FormHelperText';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import FormControl from '@material-ui/core/FormControl';
import FormLabel from '@material-ui/core/FormLabel';
import { MuiThemeProvider, createMuiTheme } from "@material-ui/core/styles";

/**
 * @author Aravinda Sai Kondamari
 * Since Nov 3,2019
 */

const theme = createMuiTheme({
  typography: {
    useNextVariants: true
  }
});

class Login extends Component {
  /*= makeStyles(theme = > ({
        ,
    })
);*/
  constructor(props) {
    super(props);
    this.state = {
      username: "",
      password: ""
    };
  }

 

  login() {
    var username = this.state.username;
    var password = this.state.password;
    var grade = this.state.Grade
    /* var usernameRegex = /^[a-zA-Z1-9]{2,30}$/;
    var passwordRegex = /^[a-zA-Z1-9]{8,20}$/;
    if (usernameRegex.test(username)) {
        if (passwordRegex.test(password)) {*/

    if (username === "Hello") {
      if (password === "123456") {
        if(grade === "FirstGrade"){
        this.props.history.push("/FirstGradeMenu", "First Grade Portal");
      }
      else{
         this.props.history.push("/ThirdGradeMenu", "Third Grade Portal");
      }
      } else {
        alert("Invalid Credentials");
        return;
      }
    }
  } /*else {
            alert("Issue with password. Length should be between 8-30 containing alphabets and numbers.")
        }
    } else {
        alert("Issue with username. Length should be between 2-30 containing alphabets and numbers. ")
    }
}*/

  render() {
    // const { classes } = style;
     const handleChange = event => {
   if(event.target.value == "FirstGrade")
    alert("Congratulations")
    else
        alert("Sorry! You have selected a wrong answer")
  };

    return (
      <div>
        <MuiThemeProvider>
          <AppBar position="static">
            <Toolbar>
              <Typography
                variant="h6"
                //className = {classes.title}
                style={style.title}
              >
                Interactive Math Learning
              </Typography>
            </Toolbar>
          </AppBar>
          <form
            //className = {classes.container}
            style={style.container}
            noValidate
            autoComplete="off"
          >
            <div>
              <div>
                <TextField
                  id="outlined-basic"
                  //className = {classes.textField}
                  style={style.textField}
                  label="Username"
                  margin="normal"
                  variant="outlined"
                  onChange={(event, newValue) =>
                    this.setState({ username: event.target.value })
                  }
                />
              </div>

              <div>
                <TextField
                  id="outlined-password-input"
                  label="Password"
                  //className = {classes.textField}
                  style={style.textField}
                  type="password"
                  autoComplete="current-password"
                  margin="normal"
                  variant="outlined"
                  onChange={(event, newValue) =>
                    this.setState({ password: event.target.value })
                  }
                />
              </div>
          <div>
          <RadioGroup row aria-label="grade" name="grade" style={{marginLeft:"20px"}}  
          onChange={(event, newValue) =>
                    this.setState({ Grade: event.target.value })}>
          <FormControlLabel value="FirstGrade" control={<Radio />} label="First Grade" />
          <FormControlLabel value="ThirdGrade" control={<Radio />} style={{marginLeft:"115px"}} label="Third Grade" />
          </RadioGroup>
          </div> 
          </div>

          </form>
          <div
            //className = {classes.container}
            style={style.container}
          >
            <Button
              variant="contained"
              color="primary"
              //className = {classes.button}
              style={style.button}
              onClick={event => this.login(event)}
            >
              Login
            </Button>
            <Button
              variant="contained"
              color="secondary"
              //className = {classes.button}
              style={style.button}
            >
              Reset
            </Button>
          </div>
        </MuiThemeProvider>
      </div>
    );
  }
}

const style = {
  root: {
    flexGrow: 1
  },
  menuButton: {
    marginRight: theme.spacing(2)
  },
  title: {
    flexGrow: 1
  },
  container: {
    display: "flex",
    flexWrap: "wrap",
    justifyContent: "center"
  },

  textField: {
    marginLeft: theme.spacing(1),
    marginRight: theme.spacing(1),
    width: 400
  },
  button: {
    padding: "10px 35px",
    margin: theme.spacing(3)
  }
};

export default withWidth()(withStyles(useStyles)(Login));
