import React from "react";

import Particles from "../ParticlesBackground";

function Banner() {
  return (
    <div>
      <div className="w-full relative enterprice" style={{ height: "400px" }}>
        <div className="grid grid-cols-2 gap-2 w-full h-full justify-center items-center absolute information" style={{ zIndex: "1" }}>
          <div className="w-80 h-80 bg-gray-500 m-auto" style={{"backgroundColor":"rgba(255,255,255,.7)"}}>
            <h1 className="text-3xl text-gray-900 p-5 text-center">Misión</h1>
            <p className="text-gray-700 text-center font-thin">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc metus arcu, scelerisque eu aliquet in, 
                ullamcorper eu mauris. Curabitur eleifend mi mattis ornare ornare. In et imperdiet eros, nec imperdiet nunc.
                Vivamus in euismod ligula, nec sagittis nibh. Nunc est massa, porta faucibus consequat vel, pellentesque id leo.</p>
          </div>
          <div className="w-80 h-80 bg-gray-500 m-auto" style={{"backgroundColor":"rgba(255,255,255,.7)"}}>
            <h1 className="text-3xl text-gray-900 p-5 text-center">Visión</h1>
            <p className="text-gray-700 text-center font-thin">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc metus arcu, scelerisque eu aliquet in, 
                ullamcorper eu mauris. Curabitur eleifend mi mattis ornare ornare. In et imperdiet eros, nec imperdiet nunc.
                Vivamus in euismod ligula, nec sagittis nibh. Nunc est massa, porta faucibus consequat vel, pellentesque id leo.</p>
          </div>
        </div>
        <Particles />
      </div>
    </div>
  );
}

export default Banner;
