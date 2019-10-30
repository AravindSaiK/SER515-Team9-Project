import React , { Component } from 'react';
import Items from "./Items";

class NumberPanel extends Component {


render() {
    return (
    <div>

        <div className="NumberPanel" >
            <span className="task-header" >Number Panel</span>
            <div style ={{marginLeft:"5px"}}>
            {
                this.props.numberValue.map((number,i) => (
                    <Items style={{marginTop:"500px"}}key={i} num = {number.key} />
                ))
            }
            </div>
        </div>
    </div>
    );
}
}

export default NumberPanel;