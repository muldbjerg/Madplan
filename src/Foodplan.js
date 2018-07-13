import React, { Component } from 'react';
import FoodplanWeek from './FoodplanWeek.js';
import FoodplanEdit from './FoodplanEdit.js';
import './Foodplan.css';

let edit = '';


class Foodplan extends Component {

  constructor(){
    super();
    this.state = {
      editable: ''
    };
  }

  componentDidUpdate(){
    console.log(this.props.editState);
    if(this.props.editState != this.state.editable){
      this.updateState();
    } 
  }


  updateState = () => {
    this.setState({
      editable: this.props.editState
    }, () => {
      console.log(this.state);
    });
  }

  render() {
    
    if(this.state.editable == 'Edit'){
      return (
        <div id="foodplanArea">
          <h2>Uge {this.props.weeknumber} </h2>
          <FoodplanEdit></FoodplanEdit>
        </div>
      );
    }
    else {
      return (
        <div id="foodplanArea">
          <h2>Uge {this.props.weeknumber} </h2>
          <FoodplanWeek></FoodplanWeek>
        </div>
      );
    }
  }
}

export default Foodplan;
