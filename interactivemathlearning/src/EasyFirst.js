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
const EasyFirst = () => {
     const history = useHistory()
const handleChange = event => {
   if(event.target.value == 9)
    alert("Congratulations")
    else
        alert("Sorry! You have selected a wrong answer")
        history.goBack()
  };
   
  return (
        <div style={{width:"100%"}}>
                            <AppBarCustom/>

        <div style={{...style}} >
                <h3 align={"center"} className="task-header">Question Panel</h3>
                <p style={{fontWeight:"bold", fontSize:"20px",marginLeft:"20px"}} >How many Drops are there below?</p>
<img src={count}  />
        </div>
        <div>
        <div  className="ResultPanel" style={{width:"49.5%"}}>
        <h3 align={"center"} className="task-header">Result Panel</h3>
        <p style={{fontWeight:"bold", fontSize:"20px",marginLeft:"20px"}} >Choose the right option below:</p>
         <RadioGroup aria-label="result" name="count" onChange={handleChange} style={{marginLeft:"20px"}}>
          <FormControlLabel value="7" control={<Radio />} label="7" />
          <FormControlLabel value="8" control={<Radio />} label="8" />
          <FormControlLabel value="9" control={<Radio />} label="9" />
          <FormControlLabel value="6" control={<Radio />} label="6" />
        </RadioGroup>

        </div>
        </div>
        </div>
    )
}




    



export default EasyFirst;