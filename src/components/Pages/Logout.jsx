

import React from 'react'
import { useLocation } from 'react-router-dom'


function Logout() {
    let location = useLocation()


  return (
    <>


<div>Logout</div>
<h2>{location.state.name} Logged out!!</h2>
    </>
 
  )
}

export default Logout