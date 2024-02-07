import React from "react";
import printer from "../images/printerAngle.png";
import Clientes from "./Clientes";
import Services from "./Services";

const Home = () => {
 return (
  <div className="h-auto font-ibmplex bg-gray-50 bg-[linear-gradient(to_right,#80808012_1.5px,transparent_1.5px)] bg-[size:170px]">
   <div className="flex flex-col lg:flex-row pt-16 pb-6 px-24">
    <div className="w-3/5 pt-16 pb-5">
     <div className="hero-content">
      <div className="text-black">
       <h1 className="text-6xl font-bold pb-3">Acelera tu oficina</h1>
       <h1 className="text-6xl font-bold pb-1">Eleva tu productividad</h1>
       <p className="py-6 text-2xl mr-32">
        Descubre un nuevo nivel de eficiencia con nuestras soluciones de
        impresión y copiadoras - Desde impresoras multifunción hasta copiadoras
        de alta calidad.
       </p>
       <button className="btn bg-red-500 font-bold text-white">
        Conocer Servicios
       </button>
       <button className="btn font-bold text-red">Contáctanos</button>
      </div>
     </div>
    </div>
    <div className="w-2/5 hero text-black items-start">
     <img src={printer} className="h-5/6"></img>
    </div>
   </div>
   <Clientes />
   <Services />
  </div>
 );
};

export default Home;
