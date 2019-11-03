
import React , { Component } from 'react';
import "./App.css"
import NumberPanel from "./NumberPanel";
import SandBoxPanel from "./SandBoxPanel";
import ResultPanel from "./ResultPanel";
import { DndProvider } from 'react-dnd'
import HTML5Backend from 'react-dnd-html5-backend'



class FirstGrade extends Component{
	state = {
	        tasks: [
	            {name:"1",category:"NumberPanel"},
	            {name:"2", category:"NumberPanel"},
	            {name:"3", category:"NumberPanel"},
	            {name:"4",category:"NumberPanel"},
	            {name:"5", category:"NumberPanel"},
	            {name:"6", category:"NumberPanel"},
	            {name:"7",category:"NumberPanel"},
	            {name:"8", category:"NumberPanel"},
	            {name:"9", category:"NumberPanel"},
	            {name:"0", category:"NumberPanel"},
				{name:"+", category:"NumberPanel"},
				{name:"-", category:"NumberPanel"},
				{name:"*", category:"NumberPanel"}

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
		  <DndProvider backend={HTML5Backend}>

		  <div className="row">
          <h1>Interactive Math Learning</h1>
			  <NumberPanel numberValue={tasks.NumberPanel}/>

			  <SandBoxPanel sandboxValue={tasks.SandBoxPanel}/>

			  <ResultPanel />


          </div>

		  </DndProvider>
          </div>
);           
    }

}
export default FirstGrade;
