import React from "react";

import Particles from "../ParticlesBackground";

function Banner() {
  return (
    <div className="w-full relative" style={{ height: "200px" }}>
      <div className="absolute text-gray-900 grid justify-left items-center p-20" style={{"zIndex":"1"}}>
        <h1 className="text-3xl font-bold">Bienvenido a nuestra tienda</h1>
        <h2>Descubre los mejores productos de fibra óptica...</h2>
      </div>
      <Particles /> 
    </div>
  );
}

export default Banner;
