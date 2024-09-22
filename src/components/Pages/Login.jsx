import React from 'react'
import { useLocation } from 'react-router-dom'
const Login = () => {

    let location = useLocation()
    console.log(location)
  return (
    <>
        <h2>Login Page</h2>
        <p>Redirected from: {location.state.st}</p>
    </>
  )
}

export default Login
