import React from "react";

import { AiOutlineMail } from 'react-icons/ai'
import { BsFillTelephoneFill } from 'react-icons/bs'

function Footer() {
  return (
    <div className=" bg-blue-900 mt-20 relative" style={{"zIndex":"1"}}>
      <div className="max-w-2xl mx-auto text-white py-10">
        <div className="text-center">
          <h3 className="text-3xl mb-3"> Conexion de Redes S.A </h3>
          <p> Lo mejor en redes </p>
          <div className="flex justify-center my-10">
            <div className="flex items-center border rounded-lg px-4 py-2 w-52 mx-2">
              <AiOutlineMail className="w-7 text-4xl"/>
              <div className="text-left ml-3">
                <p className="text-sm md:text-base"><a href="mailto:gerencia@conexionderedes.com" target="_blank">Contactanos</a></p>
              </div>
            </div>
            <div className="flex items-center border rounded-lg px-4 py-2 w-52 mx-2 bg-slate-400">
              <BsFillTelephoneFill className="w-7 text-4xl"/>
              <div className="text-left ml-3">
                <p className="text-sm md:text-base">Escribenos</p>
              </div>
            </div>
          </div>
        </div>
        <div className="mt-10 flex flex-col md:flex-row md:justify-between items-center text-sm text-gray-400">
          <p className="order-2 md:order-1 mt-8 md:mt-0">
            {" "}
            &copy; ConexiondeRedes, 2023.{" "}
          </p>
        </div>
      </div>
    </div>
  );
}

export default Footer;
