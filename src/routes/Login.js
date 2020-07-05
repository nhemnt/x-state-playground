import React, { useState } from 'react'

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

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
    </form>
  )
}

export default Login
