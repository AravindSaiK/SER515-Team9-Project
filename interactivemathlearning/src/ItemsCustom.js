import React, {useState} from 'react';
import { useDrag } from 'react-dnd'
import ItemTypes from './ItemTypes'

/**
 * @author Nikhila Saini
 * Since Nov 3,2019
 */



const ItemsCustom = ({ num, panel }) => {
   
    const color = isNaN(num) ? num == "(" || num == ")" ? "#3cb44b" :"#f58231": "#4363d8" 
    const style = panel == "result" ? !isNaN(num) || num.length <=1 ? {
    border: '1px dashed gray',
    backgroundColor: color,
    cursor: 'move',
    float: 'left',
    color: 'white',
    padding: "0.4em 1em",
    marginTop: "5em",
    marginLeft:"1.5em",
    fontSize: "3em"
} : {
    border: '1px dashed gray',
    backgroundColor: color,
    cursor: 'move',
    float: 'left',
    color: 'white',
    padding: "0.4em 1em",
    marginTop: "15em",
    marginLeft:"1.5em",
    fontSize: "1.2em"
} : {
    border: '1px dashed gray',
    backgroundColor: color,
    padding: '0.5rem 1rem',
    marginRight: '1.5rem',
    marginBottom: '1.5rem',
    marginTop: '1rem',
    cursor: 'move',
    float: 'left',
    color: 'white',
    }

    return (
        <div style={{ ...style }}>
            {num}
        </div>)
}



export default ItemsCustom;