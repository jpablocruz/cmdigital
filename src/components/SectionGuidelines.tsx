import React from "react";

interface SectionInterfaceProps {
 height: number;
 heightM: number;
 heightL: number;
 color: string;
}

const SectionGuidelines = ({
 height,
 heightL,
 heightM,
 color,
}: SectionInterfaceProps) => {
 const cn_1 =
  "absolute w-[100%] h-[" +
  height +
  "vh] md:h-[" +
  heightM +
  "vh] lg:h-[" +
  heightL +
  "vh] left-0 overflow-hidden box-border " +
  color;
 const cn_2 =
  "relative grid h-[" +
  height +
  "vh] md:h-[" +
  heightM +
  "vh] lg:h-[" +
  heightL +
  "vh] mx-auto max-w-[calc(10vw - 0px)] grid-cols-6";
 return (
  <div id="Section_container" className={cn_1}>
   <div
    id="Section_guidelines"
    className="left-0 w-[100%] h-auto px-4 lg:px-32 overflow-hidden"
   >
    <div id="Section_container" className={cn_2}>
     <div className="border-gray-200 border-solid lg:border-l-[1.5px] border-l-[1.5px]"></div>
     <div className="border-gray-200 border-none lg:border-dashed lg:border-x-[1.5px]"></div>
     <div className="border-gray-200 border-none lg:border-dashed lg:border-r-[1.5px] lg:border-l-gray-50  md:border-dashed md:border-l-[1.5px]"></div>
     <div className="border-gray-200 border-none lg:border-none md:border-dashed md:border-r-[1.5px]"></div>
     <div className="border-gray-200 border-dashed lg:border-x-[1.5px]"></div>
     <div className="border-gray-200 border-solid lg:border-r-2 border-r-[1.5px]"></div>
    </div>
   </div>
  </div>
 );
};

export default SectionGuidelines;
