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
   <div className="relative w-[100%] flex flex-col px-4 justify-center">
    <div className="text-center font-semibold font-ibmplex text-2xl pb-3">
     <h1>{"Contamos con las mejores marcas"}</h1>
    </div>
    <div className="relative flex flex-col lg:flex-row px-4 items-center">
     <div className="w-1/2 h-[70%] flex flex-col lg:flex-row gap-12 items-center">
      <img src={ricohLogo} className="w-[100px] h-[20px]"></img>
      <div>
       Aqui va el textAqui va el textAqui va el textAqui va el textAqui va el
       textAqui va el text
      </div>
     </div>
     <div className="w-1/2 h-[70%] flex flex-col lg:flex-row gap-12 items-center">
      <img src={sharpLogo} className="w-[100px] h-[20px]"></img>
      <div>
       Aqui va el textAqui va el textAqui va el textAqui va el textAqui va el
       textAqui va el text
      </div>
     </div>
    </div>
   </div>
  </div>
 );
};

export default Brands;
