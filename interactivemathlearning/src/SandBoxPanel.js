import React from 'react';
import { useDrop } from 'react-dnd'
import ItemTypes from './ItemTypes'

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
const SandBoxPanel = () => {
    const [{ canDrop, isOver }, drop] = useDrop({
        accept: ItemTypes.BOX,
        drop: () => ({ name: 'SandBox' }),
        collect: monitor => ({
            isOver: monitor.isOver(),
            canDrop: monitor.canDrop(),
        }),
    })
    const isActive = canDrop && isOver
    let backgroundColor = 'lightgoldenrodyellow'
    if (isActive) {
        backgroundColor = 'lightgoldenrodyellow'
    } else if (canDrop) {
        backgroundColor = 'lightgoldenrodyellow'
    }
    return (
        <div ref={drop} style={{...style, backgroundColor}}>
            {isActive ? 'Release to drop' : 'Drag a box here'}
        </div>)
}


export default SandBoxPanel;