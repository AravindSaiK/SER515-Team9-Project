import React , { Component } from 'react';
import "./App.css"


class App extends Component{
	state = {
	        tasks: [
	            {name:"1",category:"NumberPanel", bgcolor: "SkyBlue"},
	            {name:"2", category:"NumberPanel", bgcolor:"SkyBlue"},
	            {name:"3", category:"NumberPanel", bgcolor:"SkyBlue"},
	            {name:"4",category:"NumberPanel", bgcolor: "SkyBlue"},
	            {name:"5", category:"NumberPanel", bgcolor:"SkyBlue"},
	            {name:"6", category:"NumberPanel", bgcolor:"SkyBlue"},
	            {name:"7",category:"NumberPanel", bgcolor: "SkyBlue"},
	            {name:"8", category:"NumberPanel", bgcolor:"SkyBlue"},
	            {name:"9", category:"NumberPanel", bgcolor:"SkyBlue"},
	            {name:"0", category:"NumberPanel", bgcolor:"SkyBlue"}
	          ]
	    }
	render() {
		var tasks = {
		           NumberPanel: [],
		           SandBoxPanel: [],
		           ResultPanel: []
		       }
		       this.state.tasks.forEach ((t) => {
		           tasks[t.category].push(
		               <div key={t.name}
		                   draggable
		                   className="draggable"
		                   style = {{backgroundColor: t.bgcolor,width:"25px",textAlign:"center",padding:"10px",margin:"5px",borderRadius:"6px"}}
		               >
		                   {t.name}
		               </div>
		           );
		       });
		return (
      <div>
          <div className="row">
          <h1>Interactive Math Learning</h1>
          <div className="NumberPanel">
          <span className="task-header">Number Panel</span>
          {tasks.NumberPanel}
          </div>
           <div className="SandBoxPanel">
         <span className="task-header">SandBox Panel</span>
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