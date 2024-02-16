import React from "react";
import SectionGuidelines from "./SectionGuidelines";
import { RentMultiList } from "../constants/arrays";
import { FaMoneyBillAlt } from "react-icons/fa";

const RentMulti = () => {
 return (
  <div className="flex relative h-[80vh] md:h-[40vh] lg:h-[40vh] z-10 text-black font-mavenPro justify-center border-t-gray-200 border-t-[1px] lg:px-32 md:px-4 overflow-hidden">
   <SectionGuidelines
    height={80}
    heightM={60}
    heightL={60}
    color="bg-gray-100"
   />
   <div className="w-screen relative flex flex-col md:flex-row">
    <div className="flex md:w-[55%] mx-4 items-center">
     <div className="flex flex-col font-ibmplex">
      <h1 className="font-bold text-lg text-red-500">
       Simplificamos tu trabajo
      </h1>
      <h3 className="font-bold text-3xl">No solo alquilamos impresoras</h3>
      <p className="text-xl">
       Transformamos tu negocio con soluciones tecnológicas para simplificar
       tareas administrativas. Únete a cientos de empresas que ya avanzaron al
       futuro.
      </p>
     </div>
    </div>
    <div className="flex md:w-[45%] mx-4 items-center justify-center pt-6 md:pt-0">
     <div className="flex flex-row md:flex-col gap-2">
      {RentMultiList.map((item) => (
       <div className="flex items-center h-12 gap-3">
        <item.icon className="text-2xl text-red-500 " />
        <span className="text-xl font-medium">{item.sentence}</span>
       </div>
      ))}
     </div>
    </div>
   </div>
  </div>
 );
};

export default RentMulti;
