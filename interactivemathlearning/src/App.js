import React , { Component } from 'react';
import "./App.css"


class App extends Component{
	render() {
		return (
      <div>
          <div className="row">
          <h1>Interactive Math Learning</h1>
          <div className="NumberPanel">
          <span className="task-header">Number Panel</span>
          </div>
          <div className="ResultPanel">
          <span className="task-header">Result Panel</span> 
          </div>
          </div>
          </div>
);           
    }

}
export default App;