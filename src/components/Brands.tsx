import React from "react";
import SectionGuidelines from "./SectionGuidelines";
import ricohLogo from "../images/ricoh.png";
import sharpLogo from "../images/sharp.png";

const Brands = () => {
 return (
  <div className="flex relative h-40vh z-10 text-black font-mavenPro justify-center border-t-gray-200 border-t-[1px] lg:px-32 md:px-4 overflow-hidden">
   <SectionGuidelines
    height={200}
    heightM={190}
    heightL={150}
    color="bg-gray-50"
   />
   <div className="relative w-[100%] flex flex-col px-4 justify-center py-10">
    <div className="text-center font-semibold font-ibmplex text-2xl pb-6">
     <h1>{"Contamos con las mejores marcas"}</h1>
    </div>
    <div className="relative flex flex-col lg:flex-row px-4 items-center">
     <div className="w-1/2 h-[70%] flex flex-col lg:flex-row gap-3 lg:gap-10 items-center text-center lg:text-start pb-6">
      <img src={ricohLogo} className="w-[100px] h-[20px]"></img>
      <div>
       Corporación global reconocida por su amplia gama de soluciones de
       impresión, gestión documental y servicios digitales innovadores.
      </div>
     </div>
     <div className="w-1/2 h-[70%] flex flex-col lg:flex-row gap-3 lg:gap-10 items-center text-center lg:text-start pb-6">
      <img src={sharpLogo} className="w-[100px] h-[20px]"></img>
      <div>
       Empresa líder en innovación tecnológica y diseño en una variedad de
       productos electrónicos y soluciones tecnológicas.
      </div>
     </div>
    </div>
   </div>
  </div>
 );
};

export default Brands;
