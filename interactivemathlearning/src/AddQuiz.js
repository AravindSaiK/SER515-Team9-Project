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

class AddQuiz extends Component {

  /*= makeStyles(theme = > ({
        ,
    })
);*/
  constructor(props) {
    super(props);
    this.state = {
      quizName: "",
      Grade: ""
    };

        this.reset = this.reset.bind(this);

  }

 reset() {
   this.setState({quizName: ""});
   this.setState({Grade: ""});
   
}

  addQuestions() {

    var quizName = this.state.quizName;
    
    var grade = this.state.Grade

    var quizData =  {
      quizName,
      grade,
    }
    if (quizName === "") {
      alert("Please enter Quiz Name")
    return;
    }
      if(grade === "") {
        alert("Please select grade")
    return;
      }
      this.props.history.push("/AddQuestions",{"quizName": quizName,"grade": grade})
          /*axios
      .post('http://localhost:3001/createQuiz', quizData)
      .then(() => {alert("Quiz Added Successfully")
      this.props.history.goBack()})
      .catch(err => {
        console.error(err);
        alert("Quiz Already exists")
        this.reset()
      });*/

   
       
    
  }



  render() {
    

    return (
      <div>
        <MuiThemeProvider>
                  <AppBarCustom />

          <form
            style={style.container}
            noValidate
            autoComplete="off"
          >
            <div>
            <div>
                <TextField id="outlined-basic" style={style.textField} label="Quiz Name"  value={this.state.quizName} margin="normal" variant="outlined" onChange={(event, newValue) => this.setState({ quizName: event.target.value })}/>
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
              onClick={event => this.addQuestions(event)}
            >
              Add Questions
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

export default withWidth()(withStyles(useStyles)(AddQuiz));
