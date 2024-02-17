import React from "react";
import SectionGuidelines from "./SectionGuidelines";

const PrinterList = () => {
 return (
  <div className="flex relative h-[120] md:h-[90vh] lg:h-[90vh] z-10 justify-center overflow-hidden">
   <SectionGuidelines
    height={120}
    heightM={90}
    heightL={90}
    color="bg-gray-50"
   />{" "}
   <div className="w-screen relative flex flex-col md:flex-row pl-4 lg:pl-32">
    <div className="flex md:w-[37%] ml-4 mt-32">
     <div className="flex flex-col font-ibmplex">
      <h1 className="font-bold text-2xl text-black pb-6">
       Conoce los equipos con los que contamos
      </h1>
      <p className="text-xl text-black font-ibmplex">
       Contamos con la mejor tecnología para tu oficina. <br /> Nuestras
       soluciones son personalizadas según tus necesidades
      </p>
     </div>
    </div>
    <div className="flex md:w-[63%] h-full justify-center items-center pt-6 md:pt-0 ">
     <div className="carousel w-full h-[75%] items-center">
      <div className="carousel h-full rounded-box">
       <div className="carousel-item">
        <div className="rounded-box bg-gray-300 h-[100%] w-[50vh] mx-4" />
       </div>
       <div className="carousel-item">
        <div className="rounded-box bg-gray-300 h-[100%] w-[50vh] mx-4" />
       </div>
       <div className="carousel-item">
        <div className="rounded-box bg-gray-300 h-[100%] w-[50vh] mx-4" />
       </div>
       <div className="carousel-item">
        <div className="rounded-box bg-gray-300 h-[100%] w-[50vh] mx-4" />
       </div>
      </div>
      {/* {RentMultiList.map((item) => (
    <div className="flex flex-col md:flex-row items-center h-auto gap-3">
     <item.icon className="text-2xl text-red-500 " />
     <span className="text-xl font-medium">{item.sentence}</span>
    </div>
   ))} */}
     </div>
    </div>
   </div>
  </div>
 );
};

export default PrinterList;
