import React from "react";
import SectionGuidelines from "./SectionGuidelines";
import NavButton from "./common/NavButton";
import ipad from "../images/ipadDW-removebg.png";

const GestHero = () => {
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
         Potencializa tus procesos de <br />
         software con software
        </h1>
        <p className="py-6 text-xl font-medium md:mr-32">
         Convierte tu archivo histórico en formato digital, organiza la
         información, asigna accesos y permisos, añade firmas digitales,
         etiqueta y consulta fácilmente.
        </p>
        <NavButton link={"#"} type="button">
         Conocer servicios
        </NavButton>
       </div>
      </div>
     </div>
     <div className="flex items-center justify-center w-[100%] md:w-[40%] h-[100%]">
      <img src={ipad}></img>
     </div>
    </div>
   </div>
  </>
 );
};

export default GestHero;
