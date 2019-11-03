import React, {Component} from 'react';
import {BrowserRouter,
		Switch,
		Link,
		Route} from "react-router-dom";
import FirstGradeApp from './FirstGrade';
import ThirdGradeApp from './ThirdGrade';
import NavBar from './NavBar';
import FirstGrade from './FirstGrade';
import ThirdGrade from './ThirdGrade';

class Main extends Component{
	render(){
		return(
			<BrowserRouter>
			<div className="Main">
			<Switch>
		<Route exact path='/Main' component={NavBar} />
		<Route exact path='/FirstGrade' component={FirstGrade} />
		<Route exact path='/ThirdGrade' component={ThirdGrade} />


		</Switch>
		</div>
		</BrowserRouter>
		//<Login/>
	)
	}

}

function Home(){
	return (
		<div>
		<NavBar/>
		</div>
);
}

export default Main;