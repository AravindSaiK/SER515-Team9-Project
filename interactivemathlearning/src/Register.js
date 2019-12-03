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
import AppBarCustom from "./AppBarCustom"
/**
 * @author Aravinda Sai Kondamari
 * Since Nov 3,2019
 */

const theme = createMuiTheme({
  typography: {
    useNextVariants: true
  }
});

class Register extends Component {

  /*= makeStyles(theme = > ({
        ,
    })
);*/
  constructor(props) {
    super(props);
    this.state = {
      username: "",
      password: "",
      confirmPassword: "",
      error: "",
      fullname: "",
      Grade: ""
    };

        this.reset = this.reset.bind(this);

  }

 reset() {
   this.setState({fullname: ""});
   this.setState({username: ""});
   this.setState({password: ""});
   this.setState({Grade: ""});
   this.setState({confirmPassword: ""});
   this.setState({error: ""});

}

  login() {

    var username = this.state.username;
    var password = this.state.password;
    var confirmPassword = this.state.password;
    var grade = this.state.Grade
    var error = this.state.error
    var fullname = this.state.fullname;

    var user =  {
      fullname,
      username,
      password,
      grade,
    }
    if (fullname === "") {
    	alert("Please fill your full name")
		return;
    }
     if (username === "") {
    	alert("Please fill username")
		return;
    }

      if (password === "") {
      	alert("Please fill Password")
		return;
      }
       if (confirmPassword === "") {
      	alert("Please fill confirm Password")
		return;
      }
        
      if(grade === "") {
      	alert("Please select grade")
		return;
      }
      if(error != "") {
      	alert("Please update confirm password")
		return;
      }

          axios
      .post('http://localhost:3001/createUser', user)
      .then(() => {alert("User Succesfully Registered")
  		this.props.history.goBack()})
      .catch(err => {
        console.error(err);
        alert("User Already exists")
        this.reset()
      });

   
       
    
  }



  render() {
    

    return (
      <div>
        <MuiThemeProvider>
                  <AppBarCustom />

          <form
            //className = {classes.container}
            style={style.container}
            noValidate
            autoComplete="off"
          >
            <div>
            <div>
                <TextField id="outlined-basic" style={style.textField} label="Full Name" value={this.state.fullname} margin="normal" variant="outlined" onChange={(event, newValue) => this.setState({ fullname: event.target.value })}/>
              </div>
              <div>
                <TextField id="outlined-basic" style={style.textField} label="Username"  value={this.state.username} margin="normal" variant="outlined" onChange={(event, newValue) => this.setState({ username: event.target.value })}/>
              </div>

              <div>
                <TextField id="outlined-password-input" label="Password"  value={this.state.password}  style={style.textField} type="password" autoComplete="current-password" margin="normal" variant="outlined" onChange={(event, newValue) => { if(event.target.value == this.state.confirmPassword) { this.setState({error: ""})} else { this.setState({error: "Passwords don't match"})}

            this.setState({password: event.target.value})} }/>
              </div>
              <div>
                <TextField id="outlined-password-input" label="Confirm Password" value={this.state.confirmPassword}  style={style.textField} type="password" autoComplete="current-password" margin="normal" variant="outlined" onChange={(event, newValue) => { if(event.target.value == this.state.password) { this.setState({error: ""})} else { this.setState({error: "Passwords don't match"})}

            this.setState({confirmPassword: event.target.value})} }/>
              </div>
          <div>
          <RadioGroup row aria-label="grade" name="grade" style={{marginLeft:"20px"}}  value={this.state.Grade} 
          onChange={(event, newValue) =>
                    this.setState({ Grade: event.target.value })}>
          <FormControlLabel value="First Grade" control={<Radio />} label="First Grade" />
          <FormControlLabel value="Third Grade" control={<Radio />} style={{marginLeft:"115px"}} label="Third Grade" />
          </RadioGroup>
          </div> 
          </div>

          </form>
          <div style={{marginLeft:"600px",color:"red"}}>{this.state.error}</div>
          <div
            //className = {classes.container}
            style={style.container}
          >
            <Button
              variant="contained"
              color="primary"
              style={style.button}
              onClick={event => this.login(event)}
            >
              Register
            </Button>
            <Button
              variant="contained"
              color="secondary"
              onClick = {this.reset}
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

export default withWidth()(withStyles(useStyles)(Register));
