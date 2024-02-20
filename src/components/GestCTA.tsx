import React from "react";
import SectionGuidelines from "./SectionGuidelines";
import NavButton from "./common/NavButton";

const GestCTA = () => {
 return (
  <div className="flex relative h-[90vh] md:h-[50vh] lg:h-[50vh] z-10 text-black font-mavenPro justify-center border-t-gray-200 border-t-[1px] lg:px-32 md:px-4 overflow-hidden">
   <SectionGuidelines
    height={90}
    heightM={50}
    heightL={50}
    color="bg-gray-50"
   />
   <div className="relative flex flex-col md:flex-row w-[100%] h-auto items-center justify-center px-4 md:px-4 lg:px-32">
    <div className="flex flex-col w-[100%] h-[100%] items-center justify-center">
     <h1 className="font-ibmplex font-bold text-3xl text-red-500 pb-5">
      Elige la solución ideal en software para tu oficina
     </h1>
     <p className="font-ibmplex text-lg text-black text-center font-semibold px-32 pb-5">
      No importa tu sector, las dimensiones de tu oficina o cantidad de
      colaboradores, solo importan tus necesidades y la solución en software que
      elijas, conócelas.
     </p>
     <NavButton link="#contacto">Cotización</NavButton>
    </div>
   </div>
  </div>
 );
};

export default GestCTA;
