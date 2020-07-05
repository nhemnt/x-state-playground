import { createContext } from 'react';
import {  Machine } from 'xstate';

const loginUser = async (context, event) => {
  const { email, password } = event;
  console.log(email, password)


};


export const MachineContext = createContext();

export const appMachine = Machine({
  id: 'app',
  initial: 'init',
  context: {
    user: null, // {}
    errors: null, //[]
  },
  states: {
    init: {},
    loginUser: {
      states: {
        started: {
          invoke: {
            id: '',
            src: loginUser,
          }
        },
        success: {},
        fail: {}
      }
    }
  },
  on: {
    LOGIN: {
      target : 'loginUser.started'
    }
  }
})