import React from 'react';
import { useDrag } from 'react-dnd'
import ItemTypes from './ItemTypes'
//import { browserHistory } from 'react-router';
import { useHistory } from 'react-router-dom'
import { red } from '@material-ui/core/colors';
import SandBoxPanel from './SandBoxPanel.js'


/**
 * @author Nikhila Saini
 * Since Nov 3,2019
 */


const Items = ({ color, num }) => {

        const [items, addItems] = React.useState([]);
        //addItems(items.concat(num))

    const [{ isDragging }, drag] = useDrag({
        item: { num, type: ItemTypes.BOX },
        end: (item, monitor) => {
            const dropResult = monitor.getDropResult()
            if (item && dropResult) {
                if(dropResult.name == "AdvancedFirst"){
                    if(item.num == 3)
                    alert("You dropped the Correct Answer!")
                    else
                    alert("Sorry you dropped the wrong Answer!")
                    redirect()
                }
                if(dropResult.name == "AdvancedThird"){
                    if(item.num == "/")
                        alert("You dropped the Correct Answer!")
                    else
                        alert("Sorry you dropped the wrong Answer!")
                    redirect()
                }
                else{
                    //alert(`You dropped ${item.num} into ${dropResult.name}!`)
                    addItems(items.concat(item.num))
                    //component.handleDrop(item.num);
                   // console.log(dropResult.name)

                    //SandBoxPanel.hello()
                    
                }
            }
        },
        collect: monitor => ({
            isDragging: monitor.isDragging(),
        }),
    })
    const opacity = isDragging ? 0.4 : 1
    const history  = useHistory();

    const redirect = () => {
        history.goBack()
    }
    const style = {
    border: '1px dashed gray',
    padding: '0.5rem 1rem',
    backgroundColor: color,
    marginRight: '1.5rem',
    marginBottom: '1.5rem',
    marginTop: '1rem',
    cursor: 'move',
    float: 'left',
    color: 'white',
    padding:'10px 20px'
}
    return (
        <div ref={drag} style={{ ...style, opacity }}  >
        {num}
            
        </div>)
        
        
}



export default Items;