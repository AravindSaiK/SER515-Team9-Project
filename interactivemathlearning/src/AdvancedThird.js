
import React, { Component } from 'react';
import "./App.css"
import NumberPanel from "./NumberPanel";
import ThirdSandBoxPanel from "./ThirdSandBoxPanel";
import { DndProvider } from 'react-dnd'
import HTML5Backend from 'react-dnd-html5-backend'
import AppBarCustom from "./AppBarCustom";

/**
 * @author Tharun Chintham
 * Since Nov 3,2019
 */

class AdvancedThird extends Component {




    constructor(props) {
        super(props);
    }
    state = {
        tasks: [
            { name: "1", category: "NumberPanel", bgcolor:"#4363d8" },
            { name: "2", category: "NumberPanel", bgcolor:"#4363d8" },
            { name: "3", category: "NumberPanel", bgcolor:"#4363d8" },
            { name: "4", category: "NumberPanel", bgcolor:"#4363d8" },
            { name: "5", category: "NumberPanel", bgcolor:"#4363d8" },
            { name: "6", category: "NumberPanel", bgcolor:"#4363d8" },
            { name: "7", category: "NumberPanel", bgcolor:"#4363d8" },
            { name: "8", category: "NumberPanel", bgcolor:"#4363d8" },
            { name: "9", category: "NumberPanel", bgcolor:"#4363d8" },
            { name: "0", category: "NumberPanel", bgcolor:"#4363d8" },
            { name: "+", category: "SymbolPanel", bgcolor:"#f58231" },
            { name: "-", category: "SymbolPanel", bgcolor:"#f58231" },
            { name: "*", category: "SymbolPanel", bgcolor:"#f58231" },
            { name: "/", category: "SymbolPanel", bgcolor:"#f58231" },
            { name: "(", category: "SymbolPanel", bgcolor:"#3cb44b" },
            { name: ")", category: "SymbolPanel", bgcolor:"#3cb44b" },


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
                <AppBarCustom gradeLevel={"Quiz "+ this.props.history.location.state.quizName}/>

                <DndProvider backend={HTML5Backend}>

                    <div className="row" style={{ backgroundColor: 'white', width: "1527px", marginTop: "-20px"}}>
                        <h1></h1>
                        <NumberPanel numberValue={tasks.NumberPanel} />
                        <ThirdSandBoxPanel questionData={this.props.history.location.state} />




                    </div>

                </DndProvider>
            </div>
        );
    }

}
export default AdvancedThird;
