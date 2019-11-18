import React, {useState} from 'react';
import { useDrop } from 'react-dnd'
import ItemTypes from './ItemTypes'
import Item from './Items'
import Items from './ItemsCustom'
import { DropTarget } from 'react-dnd'



/**
 * @author Nikhila Saini, Krishna Gurram ,Venkata Sairam
 * Since Nov 3,2019
 */

const style = {
    backgroundColor: "lightgoldenrodyellow",
    width: "48%",
    height: "800px",
    float: "left",
    borderStyle: "ridge"
}
const FirstSandBoxPanel = () => {
    const numbers = []
    let add = false;
    let exp = ""
    let sum = 0;
    const [items, addItems] = useState([]);
    const [{ canDrop, isOver,item,dropped }, drop] = useDrop({
        accept: ItemTypes.BOX,
        drop: (monitor) => ({ name: 'AdvancedFirst' }),
        
        collect: monitor => ({
            isOver: monitor.isOver(),
            canDrop: monitor.canDrop(),
            item: monitor.getItem(),
            dropped: monitor.didDrop(),
            //items:  handleDrop(item.num)
            }),
    })
    const isActive = canDrop && isOver
    let backgroundColor = 'lightgoldenrodyellow'
    if (isActive) {
        backgroundColor = 'lightgoldenrodyellow'
    } else if (canDrop) {
        backgroundColor = 'lightgoldenrodyellow'
    } if(isActive && canDrop ){
        //handleDrop(item.num)
       // addItems(items.concat(item.num));
        console.log(dropped);
    }

    const handleDrop = (orderItem) =>  {
  if (!!orderItem) {
    //addItems(items.concat(item.num));
  }
}


const func = (item) =>{
    alert("hi")
addItems(items.concat(item.num));
return
}
    return (
        <div>
        <div style={{...style, backgroundColor}}>
            <div><Item num={"34"} /> {}<Item num={"-"} />{}<Item num={["31"]}/>{}</div>
        </div>
         

        <div>
        <div  ref = {drop} className="ResultPanel">
        <span className="task-header">Result Panel</span>
            <div style={{display:"none"}}>{
                numbers.map((number) => (
                    exp = exp + number
                ))


            }
            </div>
            <div>
                <br></br>
                <br></br>
                <br></br>
                <br></br>
            {isActive ? <Item num={item.num} />: "Drop Your Answer Here."}
            </div>
    </div>
</div>
        </div>
    )
}


export default (FirstSandBoxPanel);