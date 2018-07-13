import React, { Component } from 'react';
import Foodplan from './Foodplan.js';
import Navigation from './Navigation.js';
import './Foodplan.css';

let imgUrl = 'images/summer.jpg';

Date.prototype.getWeekNumber = function(){
var d = new Date(Date.UTC(this.getFullYear(), this.getMonth(), this.getDate()));
var dayNum = d.getUTCDay() || 7;
d.setUTCDate(d.getUTCDate() + 4 - dayNum);
var yearStart = new Date(Date.UTC(d.getUTCFullYear(),0,1));
return Math.ceil((((d - yearStart) / 86400000) + 1)/7)
};

function getTimeOffYear(){
    let weeknumber = new Date().getWeekNumber();

    if(weeknumber >= 10 && weeknumber < 22){
        return "spring"
    }
    else if(weeknumber >= 22 && weeknumber < 35){
        return "summer"
    }
    else if(weeknumber >= 35 && weeknumber < 48){
        return "autumn"
    }
    else{
        return "winter"
    }
} 


class Home extends Component {
  render() {
    return (
        <div className={"wrapper " + getTimeOffYear()}>
            <div id="imageLeft" style={{ backgroundImage: imgUrl }}> </div>
            <Foodplan weeknumber={new Date().getWeekNumber()}></Foodplan>
            <Navigation></Navigation>
        </div>
    );
  }
}

export default Home;
