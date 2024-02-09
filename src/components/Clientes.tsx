import React from "react";
import { Clients } from "../constants/arrays";
import SectionGuidelines from "./SectionGuidelines";

const Clientes = () => {
 return (
  <div className="flex items-center relative h-[60vh] md:h-[40vh] lg:h-[35vh] z-10 text-black font-mavenPro justify-center border-t-gray-200 border-t-[1px] lg:px-32 md:px-4 overflow-hidden">
   <SectionGuidelines
    height={60}
    heightM={40}
    heightL={35}
    color={"bg-gray-100"}
   />
   <div className="relative w-screen grid grid-cols-2 md:grid-cols-4 gap-y-8 gap-x-0 px-4">
    {Clients.map((client) => (
     <div className="flex items-center justify-center">
      <div className="text-black bg-red-400">{client.name}</div>
     </div>
    ))}
   </div>
  </div>
 );
};

export default Clientes;
