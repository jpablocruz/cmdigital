import React from "react";
import SectionGuidelines from "./SectionGuidelines";
import NavButton from "./common/NavButton";
import ipad from "../images/ipadDW-removebg.png";
import printer from "../images/pngegg (2).png";

const Services = () => {
 return (
  <div className="flex relative h-[200vh] md:h-[190vh] lg:h-[150vh] z-10 text-black font-mavenPro justify-center border-t-gray-200 border-t-[1px] lg:px-32 md:px-4 overflow-hidden">
   <SectionGuidelines
    height={200}
    heightM={190}
    heightL={150}
    color="bg-gray-50"
   />
   <div className="relative w-[100%] flex flex-col px-4 gap-2 h-[100%]">
    <div className="relative flex flex-col lg:flex-row h-[50%] items-center">
     <div className="lg:w-1/2 font-ibmplex">
      <h1 className="font-bold text-lg text-red-500 pb-7">
       Renta de multifuncionales
      </h1>
      <h1 className="font-bold text-4xl mr-6">
       Soluciones de impresión <br /> a tu medida
      </h1>
      <p className="text-xl/9 pt-4 mr-20">
       Explora las últimas tecnologías para optimizar los tiempos, la calidad y
       los costos en tus empresas o actividades, incluyendo la digitalización,
       la reproducción y la impresión.
      </p>
      <div className="pt-8">
       <NavButton link="#renta" />
      </div>
     </div>
     <div className="lg:w-1/2">
      <img src={printer} />
     </div>
    </div>
    <div className="relative flex flex-col lg:flex-row h-[50%] items-center">
     <div className="lg:w-1/2 font-ibmplex">
      <h1 className="font-bold text-lg text-red-500 pb-7">
       Gestión Documental
      </h1>
      <h1 className="font-bold text-4xl mr-6">
       Almacena, organiza <br /> y encuentra tus documentos
      </h1>
      <p className="text-xl/9 pt-4 mr-20">
       Eleva tu productividad. Guarda tus archivos históricos, organízalos y
       autoriza desde cualquier lugar. La eficiencia y el orden iran de la mano
       en tu oficina.
      </p>
      <div className="pt-8">
       <NavButton link="#gestion" />
      </div>
     </div>
     <div className="lg:w-1/2">
      <img src={ipad} />
     </div>
    </div>
   </div>
  </div>
 );
};

export default Services;
