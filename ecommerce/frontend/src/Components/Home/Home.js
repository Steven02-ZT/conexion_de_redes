import React from 'react'

import Landing from './Landing'
import Senko from './Senko'
import Products from './Products'
import Recommendations from './Recommendations'
import Conexion from './Conexion'
import Steps from './Steps'

function Home() {
  
  return (
    <div className='homePage'>
      <Landing/>
      <Senko/>
      <Products/>
      <Recommendations/>
      <Conexion/>
      <Steps/>
    </div>
  )
}

export default Home