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
            {name:"0", category:"NumberPanel", bgcolor:"SkyBlue"},
			{name:"+", category:"NumberPanel", bgcolor:"SkyBlue"},
			{name:"-", category:"NumberPanel", bgcolor:"SkyBlue"},
			{name:"*", category:"NumberPanel", bgcolor:"SkyBlue"},
			{name:"/", category:"NumberPanel", bgcolor:"SkyBlue"}
          ],NumberPanel: [],
            SandBoxPanel: []
    }

    onDragStart = (ev, name) => {
        ev.dataTransfer.dropEffect = "move";
        ev.dataTransfer.setData("name", name);
    }

    onDragOver = (ev) => {
        ev.preventDefault();
    }

    onDropLeft = e =>{
        e.preventDefault();
        const data = e.dataTransfer.getData("name");
        let {SandBoxPanel} = this.state;
        SandBoxPanel.push(data);
        this.setState({ SandBoxPanel });
    }
	
	
    
    render() {
	const { tasks,NumberPanel,SandBoxPanel }=this.state;
        return (
      <div>
          <div className="row">
          <h1>Interactive Math Learning</h1> 
          <div className="NumberPanel"> 
		  <span className="task-header">Number Panel</span>    
            {
                        tasks.map((task) =>{
                          return <p style = {{backgroundColor: "SkyBlue",width:"25px",textAlign:"center",padding:"10px",margin:"5px",borderRadius:"6px"}}
						  draggable="true" onDragStart={ (ev) => this.onDragStart(ev, task.name) }>{task.name}</p>
                        })
            }		  
             </div>

          <div className="SandBoxPanel" onDragOver={this.onDragOver} onDrop={this.onDropLeft}> 
		  <span className="task-header">SandBox Panel</span>
                 {
                    SandBoxPanel.map( itm =>{
                      return <p>{itm}</p>
                    })
                  }		  
                                   
          {tasks.SandBoxPanel}</div>
          <div className="ResultPanel">
          <span className="task-header">Result Panel</span>
          </div>
          </div>
          </div>
        );           
    }

}
export default App;