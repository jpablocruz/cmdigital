import React from "react";

const Home = () => {
 return (
  <div className="h-auto font-ibmplex bg-gray-50 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:163px_63px]">
   <div className="flex flex-col lg:flex-row py-16">
    <div className="w-3/5 py-10 pl-24">
     <div className="hero-content">
      <div className="text-black">
       <h1 className="text-6xl font-bold pb-3">Acelera tu oficina</h1>
       <h1 className="text-6xl font-bold pb-1">Eleva tu productividad</h1>
       <p className="py-6 text-2xl mr-32">
        Descubre un nuevo nivel de eficiencia con nuestras soluciones de
        impresión y copiadoras de vanguardia - Desde impresoras multifunción de
        alta eficiencia hasta copiadoras de calidad excepcional.
       </p>
       <button className="btn bg-red-500 font-bold text-white">
        Conocer Servicios
       </button>
       <button className="btn font-bold text-red">Contáctanos</button>
      </div>
     </div>
    </div>
    <div className="w-2/5 hero min-h-3.5  text-black">{"hola"}</div>
   </div>
  </div>
 );
};

export default Home;
