import React from "react";
import printer from "../images/printerAngle.png";
import Clientes from "./Clientes";
import Services from "./Services";
import SectionGuidelines from "./SectionGuidelines";

const Home = () => {
 return (
  <>
   <div className="flex relative md:h-[90vh] lg:h-[80vh] z-10 text-black font-mavenPro justify-center border-t-gray-200 border-t-[1px] px-32">
    <SectionGuidelines />
    <div className="relative flex flex-col md:flex-row px-4">
     <div className="w-3/5 mt-16 pb-5">
      <div className="hero-content pt-8">
       <div className="text-black">
        <h1 className="text-6xl font-bold pb-3">Acelera tu oficina</h1>
        <h1 className="text-6xl font-bold pb-1">Eleva tu productividad</h1>
        <p className="py-6 text-2xl font-medium mr-32">
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
     <div className="lg:w-2/5 hero text-black items-start overflow-hidden block">
      <img src={printer} className="w-[40vw] h-screen overflow-hidden"></img>
     </div>
    </div>
   </div>
  </>
 );
};

export default Home;
