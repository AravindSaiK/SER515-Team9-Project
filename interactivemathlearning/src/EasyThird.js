import React, {useState} from 'react';
import { useDrop } from 'react-dnd'
import ItemTypes from './ItemTypes'
import Item from './Items'
import Items from './ItemsCustom.js'
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
    height: "800px",
    float: "left",
    borderStyle: "ridge",
    width:"50%"
}
const EasyThird = () => {

    const history = useHistory()
    const handleChange = event => {
        if(event.target.value == 36)
            alert("Congratulations. You have passed the quiz. Going Back")
        else
            alert("Sorry! You have selected a wrong answer. Going Back")
        history.goBack()
    };

    return (
        <div style={{width:"100%"}}>
            <AppBarCustom/>

            <div style={{...style}} >

                <h3 align={"center"} className="task-header">Question Panel</h3>
                <p style={{fontWeight:"bold", fontSize:"20px",marginLeft:"20px"}} >Solve the below Equation</p>
                <div style={{marginTop:"-200px"}}><Items panel="result" num={"12"} /> {}<Items panel="result"  num={"*"} />{}<Items panel="result"  num={["3"]}/>{}</div>
            </div>
            <div>
                <div  className="ResultPanel" style={{width:"49.5%"}}>
                    <h3 align={"center"} className="task-header">Result Panel</h3>
                    <p style={{fontWeight:"bold", fontSize:"20px",marginLeft:"20px"}} >Choose the right option below:</p>
                    <RadioGroup aria-label="result" name="count" onChange={handleChange} style={{marginLeft:"20px"}}>
                        <FormControlLabel value="34" control={<Radio />} label="34" />
                        <FormControlLabel value="35" control={<Radio />} label="35" />
                        <FormControlLabel value="36" control={<Radio />} label="36" />
                        <FormControlLabel value="37" control={<Radio />} label="37" />
                    </RadioGroup>

                </div>
            </div>
        </div>
    )
}







export default EasyThird;