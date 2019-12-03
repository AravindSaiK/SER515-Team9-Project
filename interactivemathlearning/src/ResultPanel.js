import React , { Component } from 'react';
// import App from "./App";
import Item from './Items'

class ResultPanel extends Component {

render() {
    return (
    <div>
        <div  className="ResultPanel">
            <span className="task-header">Result Panel</span>
                <Item num="68"/>
        </div>
    </div>)
}
}

export default ResultPanel;