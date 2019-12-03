import React from 'react'
import { DropTarget } from 'react-dnd'
import ItemTypes from './ItemTypes'
import Item from './Items'
import Items from './ItemsCustom'



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

const SandBoxPanel = ({ canDrop, isOver, allowedDropEffect, connectDropTarget,dropped ,items}) => {
  [items,addItems] = useState([])
    
  const isActive = canDrop && isOver
  let backgroundColor = '#222'
  if (isActive) {
    backgroundColor = 'darkgreen'
  } else if (canDrop) {
    backgroundColor = 'darkkhaki'
  }

         //console.log(connectDropTarget) 
        console.log(items)
      
  return connectDropTarget(
    <div style={{ ...style, backgroundColor }}>
      {`Works with ${allowedDropEffect} drop effect`}
      <br />
      <br />

     
      {isActive ? 'Release to drop' : 'Drag a box here'}
    </div>,
  )
}
export default DropTarget(
  ItemTypes.BOX,
  {
    drop: ({ allowedDropEffect }) => ({
      name: `${allowedDropEffect} SandBoxPanel`,
      allowedDropEffect,
    }),
  },

  (connect, monitor) => ({
    connectDropTarget: connect.dropTarget(),
    isOver: monitor.isOver(),
    canDrop: monitor.canDrop(),
    dropped: monitor.getItem(),
    items:  addItems(items.concat(dropped))
  }),
)(SandBoxPanel)