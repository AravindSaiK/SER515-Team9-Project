  import React, { Component } from "react";
import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";
import useStyles from "./Login.css";
import { withStyles } from "@material-ui/core/styles";
import withWidth from "@material-ui/core/withWidth";
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

class AddQuestion extends Component {



  constructor(props) {
    super(props);
    this.state = {
      question: "",
      answer: "",
      questionData: [],
    };

        this.reset = this.reset.bind(this);
        this.submit = this.submit.bind(this);
 
  }

 reset() {
   this.setState({question: ""});
   this.setState({answer: ""});
   
}
submit () {

  
var  quizName = this.props.location.state.quizName
  var grade = this.props.location.state.grade
      const questions = this.state.questionData
      if(this.state.question != "" && this.state.answer != "")
      this.add()
      //console.log(questions)
  const quizData = {
      quizName,
      grade,
      questions
    }
    
  axios
      .post('http://localhost:3001/createQuiz', quizData)
      .then(() => {alert("Quiz Added Successfully")
      this.props.history.push("/AdminMenu")})
      .catch(err => {
        console.error(err);
        alert("Quiz Already exists")
        this.reset()
      });
}

  add() {
    const questions = this.state.questionData
    const answer = this.state.answer
    const question = this.state.question
    if(question == "") {
      alert("Please Enter Question")
      return
    }
    if(answer == "") {
      alert("Please Enter Answer")
      return
    }

    var newQuestion = {"question":question,"answer":answer}
    questions.push(newQuestion)
    //console.log(this.state.questionData)
    this.reset()
    
       //console.log(quizData)
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
                <TextField id="outlined-multiline-flexible" multiline rowsMax="4" style={style.textField} label="Question" value={this.state.question} margin="normal" variant="outlined" onChange={(event, newValue) => this.setState({ question: event.target.value })}/>
              </div>
              <div>
                <TextField id="outlined-basic" style={style.textField} label="Answer"  value={this.state.answer} margin="normal" variant="outlined" onChange={(event, newValue) => this.setState({ answer: event.target.value })}/>
              </div>

              
              
          <div>
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
              onClick={event => this.add(event)}
            >
              Add Question
            </Button>
            <Button
              variant="contained"
              color="secondary"
              onClick = {this.submit}
              style={style.button}
            >
              Submit
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

export default withWidth()(withStyles(useStyles)(AddQuestion));
