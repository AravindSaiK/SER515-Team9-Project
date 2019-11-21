import React, { Component } from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import FirstGrade from "./FirstGrade";
import ThirdGrade from "./ThirdGrade";
import NavBar from "./NavBar";
import Login from "./Login";
import FirstGradeMenu from "./FirstGradeMenu";
import TakeQuizFirstGrade from "./TakeQuizFirstGrade";
import ThirdGradeMenu from "./ThirdGradeMenu";
import TakeQuizThirdGrade from "./TakeQuizThirdGrade";
import QuestionsEasy from "./QuestionsEasy";
import EasyFirst from "./EasyFirst.js";
import EasyThird from "./EasyThird.js";
import MediumFirst from "./MediumFirst.js";
import AdvancedFirst from "./AdvancedFirst.js";
import AdvancedThird from "./AdvancedThird.js";
import MediumThird from "./MediumThird.js";
import AppBar from "./AppBarCustom.js"

/**
 * @author Nikhila Saini ,Venkata Sairam, Tharun Chintham, Aravinda Sai
 * Since Nov 3,2019
 */

class Main extends Component {

    constructor(props){
        super(props);
    }

    render() {
        return (
            <BrowserRouter>
                <div className="Main">
                    <Switch>
                        <Route exact path="/" component={Login} />
                        <Route exact path='/logout' component={Login} />
                        <Route exact path="/Main" component={NavBar} />
                        <Route exact path='/FirstGradeMenu' component={FirstGradeMenu} />
                        <Route exact path='/ThirdGradeMenu' component={ThirdGradeMenu} />
                        <Route exact path='/TakeQuizFirstGrade' component={TakeQuizFirstGrade} />
                        <Route exact path='/TakeQuizThirdGrade' component={TakeQuizThirdGrade} />
                        <Route exact path="/FirstGrade" component={FirstGrade} />
                        <Route exact path="/ThirdGrade" component={ThirdGrade} />
                        <Route exact path='/PracticeFirstGrade' component={FirstGrade} />
                        <Route exact path='/PracticeThirdGrade' component={ThirdGrade} />
                        <Route exact path='/EasyFirst' component={EasyFirst} />
                        <Route exact path='/MediumFirst' component={MediumFirst} />
                        <Route exact path='/AdvancedFirst' component={AdvancedFirst} />
                        <Route exact path='/EasyThird' component={EasyThird} />
                        <Route exact path='/MediumThird' component={MediumThird} />
                        <Route exact path='/AdvancedThird' component={AdvancedThird} />
                    </Switch>
                </div>
            </BrowserRouter>
        );
    }

}

// function Home() {
//     return (
//         <div>
//             <NavBar />
//         </div>
//     );
// }

export default Main;
