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


/**
 * @author Nikhila Saini, Krishna Gurram ,Venkata Sairam
 * Since Nov 3,2019
 */
  const handleChange = event => {
   if(event.target.value == 9)
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
const EasyFirst = () => {
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
                <p>How many Drops?</p>
<img src={count}  />
        </div>
        <div>
        <div  className="ResultPanel">
        <span className="task-header">Result Panel</span>
         <RadioGroup aria-label="result" name="count" onChange={handleChange}>
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