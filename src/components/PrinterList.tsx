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
      <p></p>
     </div>
    </div>
    <div className="flex flex-col md:w-[63%] h-full justify-center md:mt-12 pr-32">
     <div className="flex gap-4 justify-center text-black pb-4">
      <button className=" rounded-full bg-red-500 py-2 px-4 text-white font-bold font-ibmplex">
       Color
      </button>
      <button className=" rounded-full  py-2 px-4 text-black font-bold font-ibmplex">
       BN
      </button>
     </div>
     <div className="carousel w-full h-[75%]  justify-center">
      <div className="carousel h-[90%] w-[90%] rounded-box shadow-gray-300 shadow-xl bg-white">
       <div className="carousel-item">
        <div className="bg-gray-400 h-[100%] w-[50vh]" />
       </div>
       <div className="carousel-item">
        <div className="bg-red-200 h-[100%] w-[50vh]" />
       </div>
       <div className="carousel-item">
        <div className="bg-blue-100 h-[100%] w-[50vh]" />
       </div>
       <div className="carousel-item">
        <div className="h-[100%] w-[50vh]" />
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
