import React from 'react'
import { Navigate, Outlet } from 'react-router-dom'

function ComprobationRoute() {
    let user = localStorage.getItem('userInfo') ? 
    localStorage.getItem('userInfo') : null

    let auth = {'user':user}
  return (
    auth.user ? <Navigate to='/'/> : <Outlet/>
  )
}

export default ComprobationRoute