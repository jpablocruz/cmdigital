import React from "react";

const SectionGuidelines = () => {
 return (
  <div
   id="Section_container"
   className="absolute w-[100%] h-[90vh] left-0 overflow-hidden box-border bg-gray-50"
  >
   <div
    id="Section_guidelines"
    className="left-0 w-[100%] h-[100%] px-4 lg:px-32 overflow-hidden"
   >
    <div
     id="Section_container"
     className="relative grid h-screen mx-auto max-w-[calc(10vw - 0px)] grid-cols-6"
    >
     <div className="border-gray-200 border-solid lg:border-l-[1.5px] border-l-[1.5px]"></div>
     <div className="border-gray-200 border-none lg:border-dashed lg:border-x-[1.5px]"></div>
     <div className="border-gray-200 border-none lg:border-dashed lg:border-r-[1.5px] lg:border-l-white  md:border-dashed md:border-l-[1.5px]"></div>
     <div className="border-gray-200 border-none lg:border-none md:border-dashed md:border-r-[1.5px]"></div>
     <div className="border-gray-200 border-dashed lg:border-x-[1.5px]"></div>
     <div className="border-gray-200 border-solid lg:border-r-2 border-r-[1.5px]"></div>
    </div>
   </div>
  </div>
 );
};

export default SectionGuidelines;
