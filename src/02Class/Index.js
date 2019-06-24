import React from 'react';
import logo from '../00Images/logo.svg';
import './Index.css';

class ClassComp extends React.Component {
    render() {
      return (
        <div className="App">
            <h2>{ this.props.title }</h2>
            <img src={logo} className="App-logo" alt="logo" />
        </div>
      );
    }
}

export default ClassComp;
