import React , { Component } from 'react';
import TextField from '@material-ui/core/TextField';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import Icon from '@material-ui/core/Icon';
import DeleteIcon from '@material-ui/icons/Delete';
import useStyles from './Login.css';
import { withStyles } from "@material-ui/core/styles";
import withWidth from "@material-ui/core/withWidth";
import {
    BrowserRouter as Router,
    Route
} from 'react-router-dom';
import { withRouter } from 'react-router';


import { MuiThemeProvider, createMuiTheme } from "@material-ui/core/styles";


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
            username: '',
            password: ''
        };
    }

    login() {
    var username = this.state.username
    var password = this.state.password
   /* var usernameRegex = /^[a-zA-Z1-9]{2,30}$/;
    var passwordRegex = /^[a-zA-Z1-9]{8,20}$/;
    if (usernameRegex.test(username)) {
        if (passwordRegex.test(password)) {*/

                if (username == 'Hello') {
                    if (password == '123456') {
                        this.props.history.push('/Main', username)

                    }
                     else {
                        alert("Invalid Password")
                        return
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
        const {classes} = style;

        return (
            <div>
            <MuiThemeProvider >
            < AppBar position = "static" >
            < Toolbar >
            < Typography
                variant = "h6"
                //className = {classes.title}
                style = {style.title}>
            Interactive Math Learning
        </Typography>
        </Toolbar>
        </AppBar>
        < form
        //className = {classes.container}
        style = {style.container}
        noValidate
        autoComplete = "off" >
            < div >
            < div >
            < TextField
        id = "outlined-basic"
        //className = {classes.textField}
        style = {style.textField}

        label = "Username"
        margin = "normal"
        variant = "outlined"
        onChange={(event, newValue) => this.setState({ username: event.target.value })}
            />
            </div>

            < div >
            < TextField
        id = "outlined-password-input"
        label = "Password"
        //className = {classes.textField}
        style = {style.textField}
        type = "password"
        autoComplete = "current-password"
        margin = "normal"
        variant = "outlined"
        onChange={(event, newValue) => this.setState({ password: event.target.value })}
            />
            </div>
            </div>
            </form>

            < div
        //className = {classes.container}
        style = {style.container}
            >
            < Button
        variant = "contained"
        color = "primary"
        //className = {classes.button}
        style = {style.button}
        onClick={(event) => this.login(event)}>
            Login
            </Button>
            <Button
        variant = "contained"
        color = "secondary"
        //className = {classes.button}
        style = {style.button}

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
        flexGrow: 1,
    },
    menuButton: {
        marginRight: theme.spacing(2),
    },
    title: {
        flexGrow: 1,
    },
    container: {
        display: 'flex',
        flexWrap: 'wrap',
        justifyContent: 'center'
    },

    textField: {
        marginLeft: theme . spacing(1),
        marginRight: theme . spacing(1),
        width: 400,
    },
    button: {
        padding: "10px 35px",
        margin: theme . spacing(3),
    }
};

export default withWidth()(withStyles(useStyles)(Login));

