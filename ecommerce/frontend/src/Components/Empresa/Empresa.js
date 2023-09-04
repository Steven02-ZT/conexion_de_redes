import React from 'react'

import Banner from './Banner'

function Empresa() {
  return (
    <div className='empresa'>
        <Banner/>
        <div className='w-full h-fit flex justify-center items-center bg-white relative info' style={{"marginBottom":"-100px"}}>
            <div>
                <h1 className='block text-4xl text-gray-900 p-10'>Quiénes somos?</h1>
                <p className='p-10 pt-5 pb-20 text-gray-500'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc metus arcu, scelerisque eu aliquet in, ullamcorper eu mauris. 
                Curabitur eleifend mi mattis ornare ornare. In et imperdiet eros, nec imperdiet nunc. Vivamus in euismod ligula, nec sagittis nibh. 
                Nunc est massa, porta faucibus consequat vel, pellentesque id leo.</p>
            </div>
        </div>
    </div>
  )
}

export default Empresa