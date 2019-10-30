import React, {Component} from 'react'

// class FirstGrade extends Component{
// 	render(){
// 		return(
// 			<div>
// 				<h1>First Grade</h1>
// 			</div>

// 		)
// 	}
// }

// export default FirstGrade;

import "./App.css"


class FirstGradeApp extends Component{
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
	onDragStart = (ev, name) => {
		console.log('dragstart:',name);
		ev.dataTransfer.setData("name", name);
	}

	onDragOver = (ev) => {
		ev.preventDefault();
	}

	onDrop = (ev, cat) => {
		let id = ev.dataTransfer.getData("name");

		let tasks = this.state.tasks.filter((task) => {
			if (task.name === id) {
				task.category = cat;
			}
			return task;
		});

		this.setState({
			...this.state,
			tasks
		});
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
							onDragStart = {(e) => this.onDragStart(e, t.name)}
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
          <div className="NumberPanel"
			onDragOver={(e)=>this.onDragOver(e)}
			onDrop={(e)=>{this.onDrop(e, "NumberPanel")}}>
			<span className="task-header">Number Panel</span>
          {tasks.NumberPanel}
          </div>
           <div className="SandBoxPanel"
			onDragOver={(e)=>this.onDragOver(e)}
			onDrop={(e)=>this.onDrop(e, "SandBoxPanel")}>
			<span className="task-header">SandBox Panel</span>
			{tasks.SandBoxPanel}
        </div>
          <div className="ResultPanel">
          <span className="task-header">Result Panel</span> 
          </div>
          </div>


          </div>
);           
    }

}
export default FirstGradeApp;
