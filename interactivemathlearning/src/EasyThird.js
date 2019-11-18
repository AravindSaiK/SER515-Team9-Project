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


/**
 * @author Nikhila Saini, Krishna Gurram ,Venkata Sairam
 * Since Nov 3,2019
 */
  const handleChange = event => {
   if(event.target.value == 36)
    alert("Congratulations")
    else
        alert("Sorry! You have selected a wrong answer")
  };
const style = {
    backgroundColor: "lightgoldenrodyellow",
    width: "48%",
    height: "800px",
    float: "left",
    borderStyle: "ridge"
}
const EasyThird = () => {
    /*const numbers = []
    let add = false;
    let exp = ""
    let sum = 0;
    const [items, addItems] = useState([]);
    const [{ canDrop, isOver,item,dropped }, drop] = useDrop({
        accept: ItemTypes.BOX,
        drop: (monitor) => ({ name: 'SandBox' }),
        
        collect: monitor => ({
            isOver: monitor.isOver(),
            canDrop: monitor.canDrop(),
            item: monitor.getItem(),
            //dropped: connect.dropTarget(),
            //items:  handleDrop(item.num)
            }),
    })
    const isActive = canDrop && isOver
    let backgroundColor = 'lightgoldenrodyellow'
    if (isActive) {
        backgroundColor = 'lightgoldenrodyellow'
    } else if (canDrop) {
        backgroundColor = 'lightgoldenrodyellow'
    } if(isActive && canDrop && dropped){
        //handleDrop(item.num)
       // addItems(items.concat(item.num));
        console.log("rihan");
    }

    const handleDrop = (orderItem) =>  {
  if (!!orderItem) {
    //addItems(items.concat(item.num));
  }*/
  return (
        <div>
                            <AppBarCustom/>

        <div style={{...style}} >
                <span className="task-header">Question Panel</span>
                <p>Solve the below Equation </p>
                <div><Items num={"12"} /> {}<Items num={"*"} />{}<Items num={["3"]}/>{}</div>
        </div>
        <div>
        <div  className="ResultPanel">
        <span className="task-header">Result Panel</span>
         <RadioGroup aria-label="result" name="count" onChange={handleChange}>
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