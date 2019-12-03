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
import axios from "axios"
import {Link} from "react-router-dom";

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
this.reset = this.reset.bind(this);
  }

  reset() {
   this.setState({username: ""});
   this.setState({password: ""});
}

 

  login() {
    var username = this.state.username;
    var password = this.state.password;
    

    var user =  {
      username,
      password
    }
    if (username === "") {
      alert("Please Enter Username")
      return
    }
    if (password === "") {
      alert("Please Enter Password")
      return
    }

    if(username === "admin" && password === "admin") {
      this.props.history.push("/AdminMenu","Admin Portal")

}
          axios
      .post('http://localhost:3001/login', user)
      .then((response) => {
        if(response.data.grade === "First Grade")
          this.props.history.push("/FirstGradeMenu","First Grade Portal")
        else  if(response.data.grade === "Third Grade")
          this.props.history.push("/ThirdGradeMenu","Third Grade Portal")
        else
        this.props.history.push("/AdminMenu","Admin Portal")

      })
      .catch(err => {
        console.error(err.message);
        alert("Invalid Credentials")
        return
      });

  
  }   
  
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
                  value={this.state.username}
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
                  value={this.state.password}
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
          
          </div> 
          </div>

          </form>
          <div
            style={style.container}
          >
            <Button
              variant="contained"
              color="primary"
              style={style.button}
              onClick={event => this.login(event)}
            >
              Login
            </Button>
            <Button
              variant="contained"
              color="secondary"
              onClick= {this.reset}
              style={style.button}
            >
              Reset
            </Button>

          </div>
          <div style={{marginLeft:"600px", marginTop:"-25px"}}>
          
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
