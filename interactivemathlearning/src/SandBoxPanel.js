import React, {useState, useCallback } from 'react';
import { useDrop } from 'react-dnd'
import ItemTypes from './ItemTypes'
import Item from './ItemDraggable.js'
import Items from './ItemsCustom'
import { DropTarget } from 'react-dnd'
import Button from "@material-ui/core/Button";
import update from "immutability-helper";




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


const buttonStyle = {
   margin: "40px 10px"
}
const SandBoxPanel = (num) => {
    const numbers = []
    let add = false;
    let exp = ""
    let sum = 0;
    const [items, addItems] = useState([]);
    const initialItems = items
    const [{ canDrop, isOver,item,dropped }, drop] = useDrop({
        accept: ItemTypes.BOX,
        drop: (monitor,component) => ({ 
            item: component.getItem(),
            items: item.dragging ? items : addItems(items.concat(item)),
            name:  'SandBoxPanel'}),
        
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


const display = (items) => {
    return (
        items.map((number,i ) => (
        <Item  num = {number.num} id={number.index} index ={i} dragging="true" moveItem={moveItem}/>
                ))
        )

}
const undo = (items) => {
    const tempItems = items
    tempItems.splice(-1,1)
    items = []
    addItems(items.concat(tempItems))
}
const clear = (items) => {
    items = []
    addItems(items.concat(items))
}


const moveItem = useCallback(
        (dragIndex, hoverIndex) => {

            const dragCard = items[dragIndex]
            console.log(dragCard)
            addItems(
                update(items, {
                    $splice: [
                        [dragIndex, 1],
                        [hoverIndex, 0, dragCard],
                    ],
                }),
            )
        },
        [items],
    )



const evaluate = (items) => {
    var lastNum = ""
    items.map((number) =>{
                    number = number.num
                    exp = exp + number
                    if(isNaN(number)){
                        if(number == "+" || number == "-")
                             exp = exp +"0"+number
                         else if(number == "*" || number == "/")
                            exp = exp +"1"+number

                         
                            }
                            //console.log(exp)
                })
//console.log(exp)
 try {
        sum = eval(exp)
        //console.log()
    }catch (e){
        if(e instanceof SyntaxError )
    {   
        sum = 0
        return " ERROR: Improperly formed formula!"
    }
    }
    //console.log(sum)
    return sum

}
 
//console.log(item)
    return (
        <div>
            <div ref={drop} style={{...style, backgroundColor}}>
{isActive ? items.length >= 1 ? display(items):<Item num={item.num} id={item.index} index ={0} dragging="true" moveItem={moveItem}/>: items.length > 0 ? display(items):<h3 align={"center"}>Drop Here</h3>  }

                <div style={{marginTop:"500px", marginLeft:"280px"}}>
                <Button style= {buttonStyle} variant="contained" color="primary" onClick={param => undo(items)}> Delete </Button>
                <Button style= {buttonStyle} variant="contained" color="secondary" onClick={param => clear(items)}> Clear </Button>
                </div>

            </div>

            <div>
                <div  className="ResultPanel">
                <div>
                    <h3 align={"center"} className="task-header" >Result Panel</h3>
                </div>
                    {items.length > 0 ? <Items num={evaluate(items)} panel={"result"}/> : ""}
                </div>
            </div>
        </div>
)
}


export default SandBoxPanel;