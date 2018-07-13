import React, { Component } from 'react';
import FoodplanWeek from './FoodplanWeek.js';
import './Foodplan.css';


class Foodplan extends Component {
  render() {
    return (
      <div id="foodplanArea">
        <h2>Uge {this.props.weeknumber} </h2>
        <FoodplanWeek></FoodplanWeek>
      </div>
    );
  }
}

export default Foodplan;
