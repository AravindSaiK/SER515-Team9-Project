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
class Items extends Component {
    render() {
    return (
        <div style={style}>
            {this.props.num}
        </div>)
}
}


export default Items;