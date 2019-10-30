import React , { Component } from 'react';
import { useDrag } from 'react-dnd'
import ItemTypes from './ItemTypes'

const style = {
    border: '1px dashed gray',
    backgroundColor: 'white',
    padding: '0.5rem 1rem',
    marginRight: '1.5rem',
    marginBottom: '1.5rem',
    marginTop: '1rem',
    cursor: 'move',
    float: 'left',
}
const Items = ({ num }) => {
    const [{ isDragging }, drag] = useDrag({
        item: { num, type: ItemTypes.BOX },
        end: (item, monitor) => {
            const dropResult = monitor.getDropResult()
            if (item && dropResult) {
                alert(`You dropped ${item.num} into ${dropResult.name}!`)
                console.log({dropResult})
            }
        },
        collect: monitor => ({
            isDragging: monitor.isDragging(),
        }),
    })
    const opacity = isDragging ? 0.4 : 1
    return (
        <div ref={drag} style={{ ...style, opacity }}>
            {num}
        </div>)
}



export default Items;