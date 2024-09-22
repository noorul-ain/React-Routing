import React from 'react'
import { useNavigate } from 'react-router-dom'

const Dashboard = () => {
  let navigate = useNavigate()
  let data = {
    'name':'johnnie',
  }
  return (
    <>


<div>dashboard</div>
<button onClick={()=>{
  navigate("/logout",{state:data})

}}>Logout</button>
    </>
    
  )
}

export default Dashboard