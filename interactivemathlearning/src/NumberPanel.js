import React, { Component } from 'react';
import Items from "./Items";

/**
 *   @Author: Krishna Gurram
 *   Since: November 3, 2019
 */

class NumberPanel extends Component {


    


    render() {
        return (
            <div>

        <div className="NumberPanel" >
            <h4 align="center" className="task-header" >Number Panel</h4>
            <div  style ={{marginLeft:"70px", width:"250px"}} >
            {
                this.props.numberValue.map((number,i) => (
                    number.key == 0 ? <div style={{margin: "0px 75px"}}><Items key={i} color = {number.props.style.backgroundColor} num = {number.key} /></div> : <Items key={i} color = {number.props.style.backgroundColor} num = {number.key} />
                ))
            }


            </div>

            <br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/>
            <h4 align="center" className="task-header" >Symbol Panel</h4>
            <div style ={{marginLeft:"70px", width:"250px"}} >
            
            {
                this.props.symbolValue.map((symbol,i) => (
                    symbol.key == 0 ? <div style={{margin: "0px 75px"}}><Items key={i} color = {symbol.props.style.backgroundColor} num = {symbol.key} /></div> : <Items key={i} color = {symbol.props.style.backgroundColor} num = {symbol.key} />
                ))
            }



            </div>
        </div>
    </div>
        );
    }
}

export default NumberPanel;