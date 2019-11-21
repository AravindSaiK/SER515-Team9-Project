import React, {useState} from 'react';
import { useDrop } from 'react-dnd'
import ItemTypes from './ItemTypes'
import Item from './Items'
import Items from './ItemsCustom'
import { DropTarget } from 'react-dnd'
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
    borderStyle: "ridge"
}

const buttonStyle = {
   margin: "40px 10px"
}

const ThirdSandBoxPanel = () => {
    const numbers = []
    let add = false;
    let exp = ""
    let sum = 0;
    let result = 6
    const history  = useHistory();
    const [items, addItems] = useState([]);
    const [{ canDrop, isOver,item,dropped }, drop] = useDrop({
        accept: ItemTypes.BOX,
       drop: (monitor,component) => ({ 
            item: component.getItem(),
            items: addItems(items.concat(item.num)),
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
        items.map((number) => (
                    <Items  num = {number} />
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
const evaluate = (items) => {
    if(items.length == 1 && items[0] == result)
    {    alert("You can't have the same number as answer. Please try to add more numbers")
         return
    }
    var lastNum = ""
    items.map((number) =>{
        exp = exp + number
                })
 try {
        sum = eval(exp)
        console.log(exp)
    }catch (e){
        sum = 0
        alert("Sorry!, You Failed the test. Going back to home")
           redirect()
           return " ERROR: Improperly formed formula!"
    }
    if(result == sum)
        alert("Congratulations!. You've Passed the test. Going back to home")
    else
        alert("Sorry!, You Failed the test. Going back to home")
   redirect()
}

const redirect= () => {
    history.goBack()
}
    
    return (
        <div>
        <div  ref = {drop} style={{...style, backgroundColor}}>
                {isActive ? items.length >= 1 ? display(items):<Items num={item.num} />: items.length > 0 ? display(items):<p align="center" style={{fontWeight:"bold", fontSize:"18px",marginLeft:"10px"}} >Drop your Equation here and click submit</p> }
                   

                <div style={{marginTop:"500px", marginLeft:"240px"}}>
                
                    <Button style= {buttonStyle} variant="contained" color="primary" onClick={param => undo(items)}> Undo </Button>
                    <Button style= {buttonStyle} variant="contained" color="secondary" onClick={param => clear(items)}> Clear </Button>
                     <Button style= {buttonStyle} variant="contained" color="primary"  onClick={() => evaluate(items)}>Submit</Button>
                </div>
        </div>
         

        <div>
        <div  className="ResultPanel">
            < h3 align={"center"} className="task-header" >Result Panel</h3>
            <div style={{display:"none"}}>{
                numbers.map((number) => (
                    exp = exp + number
                ))


            }
            </div>
            <div>
            <br/>
            
                
            <p>Write an Equation which evaluates to the below number</p><Items num={6} />
            </div>
            
    </div>
</div>
        </div>
    )
}


export default (ThirdSandBoxPanel);