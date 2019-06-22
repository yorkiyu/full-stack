import React from 'react';
import FunctionComp from './01FunctionComp/Index';
import ClassComp from './02ClassComp/Index';
import ClockComp  from './03ClockComp/Index';
import EventComp  from './04EventComp/Index';

function App() {
  return (
    <div className="App">
        <FunctionComp title="function component" />
        <hr></hr>
        <ClassComp title="class component"/>
        <hr></hr>
        <ClockComp title="clock component"/>
        <hr></hr>
        <EventComp title="event component"/>
    </div>
  );
}

export default App;
