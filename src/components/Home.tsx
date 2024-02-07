import React from "react";
import printer from "../images/printerAngle.png";
import Clientes from "./Clientes";
import Services from "./Services";
import SectionGuidelines from "./SectionGuidelines";

const Home = () => {
 return (
  <>
   <div className="flex relative h-[120vh] md:h-[80vh] lg:h-[75vh] z-10 text-black font-mavenPro justify-center border-t-gray-200 border-t-[1px] lg:pl-32 md:pl-4 overflow-hidden">
    <SectionGuidelines />
    <div className="relative flex flex-col md:flex-row md:pl-4">
     <div className="md:w-3/5 md:mt-8 lg:mt-16 pb-5">
      <div className="hero-content pt-8">
       <div className="text-black text-center md:text-start">
        <h1 className="text-5xl md:text-6xl font-bold pb-3">
         Acelera tu oficina
        </h1>
        <h1 className="text-5xl md:text-6xl font-bold pb-1">
         Eleva tu productividad
        </h1>
        <p className="py-6 text-xl font-medium md:mr-32">
         Descubre un nuevo nivel de eficiencia con nuestras soluciones de
         impresión y copiadoras - Desde impresoras multifunción hasta copiadoras
         de alta calidad.
        </p>
        <button className="btn bg-red-500 font-bold font-ibmplex text-base text-white">
         Conocer Servicios
        </button>
        <button className="btn font-bold text-red-500 font-ibmplex text-base">
         Contáctanos
        </button>
       </div>
      </div>
     </div>
     <div className="flex w-2/5 lg:w-2/5 hero text-black flex-shrink-0 bg-red-300">
      {/* <img src={printer} className="h-[100vh]"></img> */}
     </div>
    </div>
   </div>
  </>
 );
};

export default Home;
