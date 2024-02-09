import React from "react";
import SectionGuidelines from "./SectionGuidelines";

const Services = () => {
 return (
  <div className="flex relative h-[200vh] md:h-[190vh] lg:h-[150vh] z-10 text-black font-mavenPro justify-center border-t-gray-200 border-t-[1px] lg:px-32 md:px-4 overflow-hidden">
   <SectionGuidelines
    height={200}
    heightM={190}
    heightL={150}
    color="bg-gray-50"
   />
   <div className="relative w-[100%] flex flex-col md:flex-row px-4">
    <div className="w-1/2 bg-red-600">Aqui va algo</div>
    <div className="w-1/2 bg-blue-800">Aqui va lo otro</div>
   </div>
  </div>
 );
};

export default Services;
