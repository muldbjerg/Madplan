import React, { Component } from 'react';
import Foodplan from './Foodplan.js';
import Navigation from './Navigation.js';
import app from './base.js';
import './Home.css';

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

function logout(){
    console.log("Hallo");
    app.auth().signOut()
    .then(function() {
        console.log("Logget ud");
    })
    .catch(function(error) {
        console.log("Fejlet");
    });
}




class Home extends Component {

    state = {
        editable: 'Show'
    };

    changeEditState(state){
        this.setState({
            editable: state
        });
    }

    render() {
        return (
            <div className={"wrapper " + getTimeOffYear()}>

                <button onClick={() => this.changeEditState('Edit')}>Rediger madplan</button> 

                <div id="imageLeft" style={{ backgroundImage: imgUrl }}> </div>
                <Foodplan editState={this.state.editable} weeknumber={new Date().getWeekNumber()}></Foodplan>
                <Navigation></Navigation>
                <button id="logout" onClick={logout}>Log ud</button>
            </div>
        );
    }
}

export default Home;
