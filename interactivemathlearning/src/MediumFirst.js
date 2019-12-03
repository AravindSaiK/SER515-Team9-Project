import React, {useState} from 'react';
import { useDrop } from 'react-dnd'
import ItemTypes from './ItemTypes'
import Item from './Items'
import Items from './ItemsCustom'
import Radio from '@material-ui/core/Radio';
import RadioGroup from '@material-ui/core/RadioGroup';
import FormHelperText from '@material-ui/core/FormHelperText';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import FormControl from '@material-ui/core/FormControl';
import FormLabel from '@material-ui/core/FormLabel';
import count from "./img/count.JPG"
import AppBarCustom from "./AppBarCustom";
import TextField from '@material-ui/core/TextField';
import { makeStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import { useHistory } from 'react-router-dom'





/**
 * @author Nikhila Saini, Krishna Gurram ,Venkata Sairam
 * Since Nov 3,2019
 */
  
const style = {
    backgroundColor: "white",
    width: "48%",
    height: "800px",
    float: "left",
    borderStyle: "ridge",
    width: "50%"
}

const useStyles = makeStyles(theme => ({
    container: {
        display: 'flex',
        flexWrap: 'wrap',
    },
    textField: {
        marginLeft: theme.spacing(1),
        marginRight: theme.spacing(1),
        width: 200,
    },
    button: {
        margin: theme.spacing(1),
    },
    input: {
        display: 'none',
    },
}));




const MediumFirst = () => {

const history = useHistory()

    

    const [res,updateResult] = useState(0)

    const classes = useStyles();

    const handleClick = (event) => {
        var result = {res}
        if (result.res == 13) {
            alert("Congratulations! You have entered the correct answer  ");
        }
        else{
            alert("Sorry! You have entered a wrong answer");
        }
        history.goBack()
    }
  return (
        <div style={{width:"100%"}}>
             <AppBarCustom/>
        <div style={{...style}} >
                <h3 align={"center"} className="task-header">Question Panel</h3>
                <p style={{fontWeight:"bold", fontSize:"20px",marginLeft:"10px"}} >What is the missing number in a  given sequence?</p>
                <p style={{fontWeight:"bold", fontSize:"20px",marginLeft:"10px"}}>12, _ ,14,15,16</p>
        </div>
        <div>
        <div  className="ResultPanel" style={{width:"49.5%"}}>
        <h3 align={"center"} className="task-header">Result Panel</h3>
            <div>
                <TextField
                    id="outlined-basic"
                    className={classes.textField}
                    label="Enter your Answer"
                    margin="normal"
                    variant="outlined"
                    autoComplete="off"
                    onChange={(event, newValue) =>
                        updateResult(event.target.value)
                    }
                />
            </div>
            <Button variant="contained" color="primary" className={classes.button} onClick={event => handleClick(event)}
            >
                Submit
            </Button>
        </div>
        </div>
        </div>
    )


}



    



export default MediumFirst;