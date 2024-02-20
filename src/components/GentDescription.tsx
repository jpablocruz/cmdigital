import React from "react";
import SectionGuidelines from "./SectionGuidelines";

const GentDescription = () => {
 return (
  <div className="flex relative h-[90vh] md:h-[50vh] lg:h-[50vh] z-10 text-black font-mavenPro justify-center border-t-gray-200 border-t-[1px] lg:px-32 md:px-4 overflow-hidden">
   <SectionGuidelines
    height={90}
    heightM={50}
    heightL={50}
    color="bg-gray-100"
   />
   <div className="relative flex flex-col md:flex-row w-[100%] h-auto items-center justify-center">
    <div className="bg-red-700 w-1/2 h-[90%] m-10 "></div>
    <div className="flex flex-col w-1/2 px-28">
     <h1 className="font-ibmplex text-2xl text-red-500 font-bold">
      Tu solución ideal en software
     </h1>
     <p className="text-black font-ibmplex text-lg">
      Transformamos tu negocio con soluciones tecnológicas para simplificar
      tareas administrativas. Únete a cientos de empresas que ya avanzaron al
      futuro.
     </p>
    </div>
   </div>
  </div>
 );
};

export default GentDescription;
