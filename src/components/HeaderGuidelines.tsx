import React from "react";

const HeaderGuidelines = () => {
 return (
  <div
   id="Header_gontainer"
   className="w-[100%] h-16 absolute top-0 left-0 overflow-hidden box-border bg-white"
  >
   <div
    id="Header_guidelines"
    className="absolute top-0 left-0 w-[100%] h-[100%] px-4"
   >
    <div
     id="Guides_container"
     className="relative grid h-[100%] mx-auto max-w-[calc(10vw - 0px)] grid-cols-6"
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

export default HeaderGuidelines;
