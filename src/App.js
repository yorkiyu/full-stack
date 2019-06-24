import React from 'react';
import FunctionComp from './01Function/Index';
import ClassComp from './02Class/Index';
import ClockComp  from './03Clock/Index';
import EventComp  from './04Event/Index';
import SlotComp from './05Slot/Single';
import MultiComp from './05Slot/Multi';
import ErrorBoundaryComp from './06ErrorBoundary/Index';
import ForwardRefComp from './07ForwardRef/Index';
import HocComp from './08Hoc/Index';
import PortalComp from './09Portal/Index';
import RenderPropsComp from './10RenderProps/Index';
import HookUseStateComp from './11Hook/UseState';
import HookUseEffectComp from './11Hook/UseEffect';
import HookCustomComp from './11Hook/Custom';

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
        <hr></hr>
        <SlotComp title="Single Solt component"/>
        <hr></hr>
        <MultiComp title="Multi Solt component"/>
        <hr></hr>
        <ErrorBoundaryComp title="Error Boundary component"/>
        <hr></hr>
        <ForwardRefComp title="Forward Ref component"/>
        <hr></hr>
        <HocComp title="Hoc Ref component"/>
        <hr></hr>
        <PortalComp title="Portal component"/>
        <hr></hr>
        <RenderPropsComp title="Render Props component"/>
        <hr></hr>
        <HookUseStateComp title="Hook UseState component"/>
        <hr></hr>
        <HookUseEffectComp title="Hook UseEffect component"/>
        <hr></hr>
        <HookCustomComp title="Hook Custom component"/>
    </div>
  );
}

export default App;
