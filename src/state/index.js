import { createContext } from 'react';
import { assign, Machine } from 'xstate';
import axios from "axios";

const fakeUrl = 'https://reqres.in';

const loginUser = async (context, event) => {
  const { email, password } = event;
  console.log(email, password)

  const response = await axios.post(`${fakeUrl}/api/login`, {
    email,
    password
  })
  .catch(err => err.response);

  console.log(response);
  const {status, data} = response;

  if(status > 200){
    throw new Error(data?.error ? data.error : 'something Went wrong');
  }

  return data;
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
            onDone: {
              target: 'success',
              actions: assign({ user: (context, event) => {
                console.log(event.data);
                localStorage.setItem('user', JSON.stringify(event.data));
                return event.data
              } })
            },
            onError: {
              target: 'fail',
              actions: assign({ errors: (context, event) => {
                console.log(event);
                return [event.data.message]
              } })
            }
          }
        },
        success: {},
        fail: {}
      }
    }
  },
  on: {
    LOGIN: {
      target: 'loginUser.started'
    }
  }
})