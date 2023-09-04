import React, { useEffect } from 'react'
import { useNavigate } from 'react-router-dom'

function Log_out() {
    const navigate = useNavigate()
    useEffect(() => {
        navigate('/')
    },[navigate])
  return (
    <div className="font-light text-2xl flex justify-center items-center h-60">
      <h1>Loading...</h1>
    </div>
  )
}

export default Log_out