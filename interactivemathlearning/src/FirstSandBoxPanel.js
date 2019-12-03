import React, {useState, useCallback, useEffect} from 'react';
import { useDrop } from 'react-dnd'
import ItemTypes from './ItemTypes'
import Item from './ItemDraggable.js'
import Items from './ItemsCustom'
import { DropTarget } from 'react-dnd'
import Button from "@material-ui/core/Button";
import green from '@material-ui/core/colors/green';
import { useHistory } from 'react-router-dom'
import update from "immutability-helper";




/**
 * @author Nikhila Saini, Krishna Gurram ,Venkata Sairam
 * Since Nov 3,2019
 */

const style = {
    backgroundColor: "white",
    width: "35%",
    height: "800px",
    float: "left",
    borderStyle: "ridge",
    
}

const buttonStyle = {
   margin: "40px 10px",
}

const submitButtonStyle = {
   margin: "40px 10px",
   backgroundColor: "#2e7d32",
   color: "#fff"
}

const FirstSandBoxPanel = (questionData) => {
    const [questionNumber,updateQuestionNumber] = useState(0);
    const questionsData = questionData.questionData.questions
    const [score,updateScore] = useState(0);
    //console.log(questionsData)
    const[quizFinished,updateQuizFinished] = useState(false)
    const numbers = []
    let add = false;
    let exp = ""
    let sum = 0;
    const [items, addItems] = useState([]);
        const history = useHistory()
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
    

    const handleDrop = (orderItem) =>  {
  if (!!orderItem) {
    //addItems(items.concat(item.num));
  }
}

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
const loadNext = (items,answer) => {
    updateQuestionNumber(questionNumber+1)
    evaluateQuestion(items,answer)
}
const evaluateQuestion = (items,answer) => {
    const evaluatedAnswer = evaluate(items)
    if( evaluatedAnswer == answer)
        updateScore(score+1)
    items = []
    addItems(items.concat(items))
    if(questionsData.length-1 == questionNumber) {
        //alert("You have scored "+score+" Going back")
        updateQuizFinished(true)
    }
}
const evaluate = (items) => {
    items.map((number) =>{
                    number = number.num
                    exp = exp + number
                })
 try {
        sum = eval(exp)
    }catch (e){
        if(e instanceof SyntaxError )
    {   
        sum = 0
        return " ERROR: Improperly formed formula!"
    }
    }
    return sum

}
useEffect(() => {
    if(quizFinished) {
      alert("You have scored " + score+". Going Back")
    history.goBack()
    }
  });


    return (
        <div >
        <div>
        <div style={{...style, backgroundColor}}>
            <div>
                <h3 align={"center"} className="task-header">Question Panel</h3>
                <p style={{fontWeight:"bold", fontSize:"20px",marginLeft:"20px"}} >{questionsData.length-1 < questionNumber ? " " : questionsData[questionNumber].question}</p>
            </div>
        </div>
         

        <div>
        <div  ref = {drop} className="ResultPanel" style={{width:"38%"}}>
        <h3 align={"center"} className="task-header">Result Panel</h3>
           
            <div style={{height:"50px"}}>
{isActive ? items.length >= 1 ? display(items):<Item num={item.num} id={item.index} index ={0} dragging="true" moveItem={moveItem}/>: items.length > 0 ? display(items):<h3 align={"center"}>Drop Here</h3>  }
            </div>
                 <div style={{marginTop:"400px", marginLeft:"180px"}}>
                <Button style= {buttonStyle} variant="contained" color="primary" onClick={param => undo(items)}> Delete </Button>
                <Button style= {buttonStyle} variant="contained" color="secondary" onClick={param => clear(items)}> Clear </Button>
                <Button  style= {submitButtonStyle} variant="contained" color="#2e7d32" onClick={param => loadNext(items,questionsData[questionNumber].answer) }> {questionsData.length-1 == questionNumber ? "Submit" : "Next"} </Button>
                 <p style={{fontWeight:"bold", fontSize:"20px",marginLeft:"45px",marginTop:"-10px"}} >Your Current Score: {score}</p>
                </div>
               

             
    </div>
</div>
</div>


        </div>
    )
}


export default (FirstSandBoxPanel);