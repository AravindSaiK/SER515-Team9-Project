import React, {Component} from 'react';
import {BrowserRouter as Router,
		Switch,
		Link,
		Route} from "react-router-dom";
import FirstGradeApp from './FirstGrade';
import ThirdGradeApp from './ThirdGrade';

class Main extends Component{
	render(){
		return(
			<Router>
				<div>
					<ul>
					<li>
						<Link to="/">Home</Link>
					</li>
					<li>
						<Link to="/First">First Grade</Link>
					</li>
					<li>
						<Link to="/Third">Third Grade</Link>
					</li>
					</ul>
					<hr />
					<Switch>
					<Route exact path="/">
						<Home />
					</Route>
					<Route path="/First">
						<FirstGradeApp />
					</Route>
					<Route path="/Third">
						<ThirdGradeApp />
					</Route>
					</Switch>

				</div>
			</Router>
		)
	}
	
}

function Home(){
	return (
		<div>
		  <h2>Home</h2>
		</div>
	  );
}

export default Main;