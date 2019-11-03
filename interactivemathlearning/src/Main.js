import React, {Component} from "react";
import {BrowserRouter, Route, Switch} from "react-router-dom";
import FirstGrade from "./FirstGrade";
import ThirdGrade from "./ThirdGrade";
import NavBar from "./NavBar";
import Login from "./Login";
import FirstGradeMenu from './FirstGradeMenu';
import ThirdGradeMenu from './ThirdGradeMenu';

/**
 * @author Nikhila Saini ,Venkata Sairam
 * Since Nov 3,2019
 */

class Main extends Component {
    render() {
        return (
            <BrowserRouter>
                <div className="Main">
                    <Switch>
                        <Route exact path="/" component={Login}/>
                        <Route exact path="/Main" component={NavBar}/>
                        <Route exact path='/FirstGradeMenu' component={FirstGradeMenu}/>
						<Route exact path='/ThirdGradeMenu' component={ThirdGradeMenu}/>
                        <Route exact path="/FirstGrade" component={FirstGrade}/>
                        <Route exact path="/ThirdGrade" component={ThirdGrade}/>
                    </Switch>
                </div>
            </BrowserRouter>
        );
    }
}

function Home() {
    return (
        <div>
            <NavBar/>
        </div>
    );
}

export default Main;
