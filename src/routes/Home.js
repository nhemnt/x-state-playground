import React from 'react'

const Home = (props) => {
  const logoutUser =() => {
    localStorage.removeItem('user');
    debugger
    props.history.push('/login')
  }
  return (
    <div>
      Home page

      <button onClick= {() => logoutUser()}>
        logout
      </button>
    </div>
  )
}

export default Home
