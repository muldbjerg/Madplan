import React, { Component } from 'react';
import './Navigation.css';

class Navigation extends Component {
  render() {
    return (
      <nav id="navigation">
        <div id="leftside">
          <div className="arrow left">
            <svg height="20" width="40">
              <polyline points="20,0 3,10 20,20" />
              <polygon className="arrowLine" points="4,10 40,10"  />
            </svg>
          </div>
        </div>
        
        <div id="rightside">
          <div className="arrow right">
            <svg height="20" width="40">
              <polyline points="20,0 37,10 20,20" />
              <polygon className="arrowLine" points="38,10 0,10" />
            </svg>
          </div>
        </div>
      </nav>
    );
  }
}

export default Navigation;
