import React from 'react';
import Routes from "routes";
import './App.css';



import { useMachine } from '@xstate/react';
import { appMachine, MachineContext } from 'state';

function App() {
  const [currentMachine, sendToMachine] = useMachine(appMachine);
  return (
    <MachineContext.Provider value={[currentMachine, sendToMachine]}>
      <Routes />
    </MachineContext.Provider>

  );
}

export default App;
