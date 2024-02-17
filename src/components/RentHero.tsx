import React from "react";
import printer from "../images/printerAngle.png";
import SectionGuidelines from "./SectionGuidelines";
import NavButton from "./common/NavButton";
import printerFront from "../images/printerFront2.png";

const RentHero = () => {
 return (
  <>
   <div className="flex relative h-[120vh] md:h-[80vh] lg:h-[75vh] z-10 text-black font-mavenPro justify-center border-t-gray-200 border-t-[1px] lg:px-32 md:px-4 overflow-hidden">
    <SectionGuidelines
     height={120}
     heightM={80}
     heightL={75}
     color="bg-gray-50"
    />
    <div className="relative flex flex-col md:flex-row px-4">
     <div className="md:w-3/5 pb-5 flex items-center">
      <div className="hero-content">
       <div className="text-black text-center md:text-start">
        <h1 className="text-4xl md:text-5xl font-bold">
         De la renta de impresoras <br /> a la impresión administrada
        </h1>
        <p className="py-6 text-xl font-medium md:mr-32">
         Ofrecemos un servicio integral para imprimir y gestionar documentos, lo
         que ayuda a las empresas a ser más eficientes y ahorrar dinero.
        </p>
        <NavButton link={"#"} type="button">
         Conocer servicios
        </NavButton>
       </div>
      </div>
     </div>
     <div className="flex items-center justify-center w-[100%] md:w-[40%] h-[100%]">
      <img src={printerFront}></img>
     </div>
    </div>
   </div>
  </>
 );
};

export default RentHero;
