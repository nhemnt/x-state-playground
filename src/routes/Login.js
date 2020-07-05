import React, { useState, useContext } from 'react'
import { MachineContext } from 'state';
const Login = (props) => {
  const [email, setEmail] = useState('eve.holt@reqres.in');
  const [password, setPassword] = useState('cityslicka');

  const [machine, sendToMachine] = useContext(MachineContext);

  const { errors } = machine.context;

  const getUpdateStateHook = (key) => {
    return {
      email: setEmail,
      password: setPassword,
    }[key]
  }

  const handleOnChange = (e) => {
    const { name, value } = e.target;
    const setState = getUpdateStateHook(name);
    setState(value)
  }

  const handleSubmit = (e) => {
    e.preventDefault();

    //login here
    sendToMachine('LOGIN', { email, password })
  }

  const redirectUserToHomePage = () => {
    props.history.push("/");
  }


  return (
    <form onSubmit={handleSubmit}>
      Login
      <div>
        <input type="text" name="email" value={email} onChange={handleOnChange} required />
      </div>
      <div>
        <input type="password" name="password" value={password} onChange={handleOnChange} required />
      </div>
      <button type="submit">Login</button>
      {machine.matches('loginUser.fail') && (
        <p style={{ color: 'red' }}>
          {errors.join(",")}
        </p>
      )}
      {machine.matches('loginUser.success') && redirectUserToHomePage()}
    </form>
  )
}

export default Login
