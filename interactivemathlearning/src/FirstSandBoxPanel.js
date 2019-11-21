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
    backgroundColor: "white",
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
    let backgroundColor = 'white'
    

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
            <div style={{}}><Items num={"34"} panel="result"/> {}<Items panel="result" num={"-"} />{}<Items panel="result" num={["31"]}/>{}</div>
        </div>
         

        <div>
        <div  ref = {drop} className="ResultPanel">
        <h3 align={"center"} className="task-header">Result Panel</h3>
            <div style={{display:"none"}}>{
                numbers.map((number) => (
                    exp = exp + number
                ))


            }
            </div>
            <div>
            {isActive ? <Items num={item.num} />:  <p align="center" style={{fontWeight:"bold", fontSize:"18px",marginLeft:"10px"}} >Drop your Answer here</p>}
            </div>
    </div>
</div>
        </div>
    )
}


export default (FirstSandBoxPanel);