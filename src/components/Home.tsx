import React from "react";
import printer from "../images/printerAngle.png";
import Clientes from "./Clientes";
import Services from "./Services";
import SectionGuidelines from "./SectionGuidelines";
import NavButton from "./common/NavButton";
import Brands from "./Brands";

const Home = () => {
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
        <h1 className="text-4xl md:text-5xl font-bold pb-3">
         Acelera tu oficina
        </h1>
        <h1 className="text-4xl md:text-5xl font-bold pb-1">
         Eleva tu productividad
        </h1>
        <p className="py-6 text-xl font-medium md:mr-32">
         Descubre un nuevo nivel de eficiencia con nuestras soluciones de
         impresión y copiadoras - Desde impresoras multifunción hasta copiadoras
         de alta calidad.
        </p>
        <NavButton link={"#"} type="button">
         Contactanos
        </NavButton>
        <button className="btn font-bold text-red-500 font-ibmplex text-base">
         Contáctanos
        </button>
       </div>
      </div>
     </div>
     <img
      className="flex w-[500px] h-[500px] lg:w-[500px] lg:h-[500px] hero text-black"
      src={printer}
     ></img>
    </div>
   </div>
   <Clientes />
   <Services />
   <Brands />
  </>
 );
};

export default Home;
