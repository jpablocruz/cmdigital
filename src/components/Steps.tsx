import React from "react";
import SectionGuidelines from "./SectionGuidelines";
import { FaMousePointer } from "react-icons/fa";

const Steps = () => {
 return (
  <div className="flex relative h-[90vh] md:h-[40vh] lg:h-[40vh] z-10 text-black font-mavenPro justify-center border-t-gray-200 border-t-[1px] px-4 lg:px-32 md:px-4 overflow-hidden">
   <SectionGuidelines
    height={90}
    heightM={40}
    heightL={40}
    color="bg-gray-100"
   />
   <div className="flex relative w-full h-auto">
    <div className="flex flex-col px-4 md:px-4 lg:px-32 w-[100%] items-center justify-center">
     <h1 className="font-bold text-3xl text-black font-ibmplex">
      Los primeros pasos
     </h1>
     <h3 className="text-black font-ibmplex text-base">
      Empezar a trabajar con nosotros solo toma unos clicks
     </h3>
     <div className="flex flex-col md:flex-row gap-4">
      <div className="flex flex-col">
       <FaMousePointer />
       <h1>1. Texto</h1>
       <span>Lorem ipsum, lorem lorem lorem</span>
      </div>
      <div className="flex flex-col">
       <FaMousePointer />
       <h1>1. Texto</h1>
       <span>Lorem ipsum, lorem lorem lorem</span>
      </div>{" "}
      <div className="flex flex-col">
       <FaMousePointer />
       <h1>1. Texto</h1>
       <span>Lorem ipsum, lorem lorem lorem</span>
      </div>
      <div className="flex flex-col">
       <FaMousePointer />
       <h1>1. Texto</h1>
       <span>Lorem ipsum, lorem lorem lorem</span>
      </div>{" "}
     </div>
    </div>
   </div>
  </div>
 );
};

export default Steps;
