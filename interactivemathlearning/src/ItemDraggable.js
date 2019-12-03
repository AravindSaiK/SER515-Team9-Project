import React, {useRef} from 'react';
import { useDrag, useDrop } from 'react-dnd'
import ItemTypes from './ItemTypes'
//import { browserHistory } from 'react-router';
import { useHistory } from 'react-router-dom'


/**
 * @author Nikhila Saini
 * Since Nov 3,2019
 */


const ItemDraggable = ({  id, num, index, moveItem,dragging }) => {
    const color = isNaN(num) ? num === "(" || num === ")" ? "#3cb44b" :"#f58231": "#4363d8"
    const ref = useRef(null)
    const [items, addItems] = React.useState([]);

    const [, drop] = useDrop({

        accept: ItemTypes.BOX,
        hover(item, monitor) {
            //  console.log(item)
            if (!ref.current) {
                return
            }
            console.log(item);
            const dragIndex = item.index
            const hoverIndex = index
            // Don't replace items with themselves
            console.log("drag index "+dragIndex)
            console.log("hover index "+hoverIndex)

            if (dragIndex === hoverIndex) {
                return
            }
            // Determine rectangle on screen
            const hoverBoundingRect = ref.current.getBoundingClientRect()
            console.log(hoverBoundingRect)

            // Get vertical middle
            const hoverMiddleY =
                (hoverBoundingRect.width) / 2
            // Determine mouse position
            const clientOffset = monitor.getClientOffset()
            console.log(clientOffset)
            // Get pixels to the top
            const hoverClientY = clientOffset.x - hoverBoundingRect.left
            // Only perform the move when the mouse has crossed half of the items height
            // When dragging downwards, only move when the cursor is below 50%
            // When dragging upwards, only move when the cursor is above 50%
            // Dragging downwards
            console.log(dragIndex+" "+hoverIndex+ " "+hoverClientY+" "+hoverMiddleY)
            if (dragIndex < hoverIndex && hoverClientY < hoverMiddleY) {
                return
            }
            // Dragging upwards
            if (dragIndex > hoverIndex && hoverClientY > hoverMiddleY) {
                return
            }
            // Time to actually perform the action
            moveItem(dragIndex, hoverIndex)
            // Note: we're mutating the monitor item here!
            // Generally it's better to avoid mutations,
            // but it's good here for the sake of performance
            // to avoid expensive index searches.
            item.index = hoverIndex
        },
    })



    const [{ isDragging }, drag] = useDrag({

        item: { num, type: ItemTypes.BOX, id, index,dragging },
        end: (item, monitor) => {
            const dropResult = monitor.getDropResult()

            if (item && dropResult) {
                if(dropResult.name === "AdvancedFirst"){
                    if(item.num === 3)
                        alert("You dropped the Correct Answer!")
                    else
                        alert("Sorry you dropped the wrong Answer!")
                    redirect()
                }
                if(dropResult.name === "AdvancedThird"){
                    if(item.num === "/")
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

    drag(drop(ref))
    //console.log("h")
    //console.log(ref)
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
        //padding:'10px 20px'
    }
    return (
        <div ref={ref} style={{ ...style, opacity }}  >
            {num}
        </div>)
}



export default ItemDraggable;