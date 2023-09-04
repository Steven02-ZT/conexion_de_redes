import React from 'react'
import { Outlet,Navigate } from 'react-router-dom'

function PortalRoute() {
    const user = localStorage.getItem('userInfo') ? 
    JSON.parse(localStorage.getItem('userInfo')) : null
    let auth = {'loggedin':user}
  return (
        auth.loggedin ? <Outlet/> : <Navigate to='/login' />
  )
}

export default PortalRoute