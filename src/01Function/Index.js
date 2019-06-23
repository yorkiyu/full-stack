import React from 'react';
import logo from '../Images/logo.svg';
import './Index.css';

function Index(props) {
  return (
    <div className="App">
        <h2>{ props.title }</h2>
        <img src={logo} className="App-logo" alt="logo" />
    </div>
  );
}

export default Index;
