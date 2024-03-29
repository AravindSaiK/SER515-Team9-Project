import React, { Component } from 'react'


import "./App.css"
import NumberPanel from "./NumberPanel";
import SandBoxPanel from "./SandBoxPanel";
import { DndProvider } from 'react-dnd'
import HTML5Backend from 'react-dnd-html5-backend'
import AppBarCustom from "./AppBarCustom";

/**
 * @author Tharun Chintham
 * Since Nov 3,2019
 */

class ThirdGrade extends Component {
	state = {
		tasks: [
			{ id: 1, name: "1", category: "NumberPanel", bgcolor:"#4363d8" },
			{ id: 2, name: "2", category: "NumberPanel", bgcolor:"#4363d8" },
			{ id: 3, name: "3", category: "NumberPanel", bgcolor:"#4363d8" },
			{ id: 4, name: "4", category: "NumberPanel", bgcolor:"#4363d8" },
			{ id: 5, name: "5", category: "NumberPanel", bgcolor:"#4363d8" },
			{ id: 6, name: "6", category: "NumberPanel", bgcolor:"#4363d8" },
			{ id: 7, name: "7", category: "NumberPanel", bgcolor:"#4363d8" },
			{ id: 8, name: "8", category: "NumberPanel", bgcolor:"#4363d8" },
			{ id: 9, name: "9", category: "NumberPanel", bgcolor:"#4363d8" },
			{ id: 10, name: "0", category: "NumberPanel", bgcolor:"#4363d8" },
			{ id: 11, name: "+", category: "SymbolPanel", bgcolor:"#f58231" },
			{ id: 12, name: "-", category: "SymbolPanel", bgcolor:"#f58231" },
			{ id: 13, name: "*", category: "SymbolPanel", bgcolor:"#f58231" },
			{ id: 14, name: "/", category: "SymbolPanel", bgcolor:"#f58231" },
			{ id: 15, name: "(", category: "SymbolPanel", bgcolor:"#3cb44b" },
			{ id: 16, name: ")", category: "SymbolPanel", bgcolor:"#3cb44b" },


		]
	}
	onDragStart = (ev, name) => {
		console.log('dragstart:', name);
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
			ResultPanel: [],
			SymbolPanel: []
		}
		this.state.tasks.forEach((t) => {
			tasks[t.category].push(
				<div key={t.name}
					 id= {t.id}
					 onDragStart={(e) => this.onDragStart(e, t.name)}
					 draggable
					 className="draggable"
					 style={{ backgroundColor: t.bgcolor, width: "25px", textAlign: "center", padding: "10px", margin: "5px", borderRadius: "6px" }}
				>
					{t.name}
				</div>
			);
		});
		return (
			<div>
				<AppBarCustom/>

				<DndProvider backend={HTML5Backend}>

					<div className="row" style={{ backgroundColor: 'white', width: "1527px"}}>
						<NumberPanel numberValue={tasks.NumberPanel} symbolValue={tasks.SymbolPanel}/>

						<SandBoxPanel sandboxValue={tasks.SandBoxPanel} />



					</div>

				</DndProvider>
			</div>
		);
	}

}
export default ThirdGrade;