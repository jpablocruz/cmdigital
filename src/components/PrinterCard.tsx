import React from "react";
import printer from "../images/printerFront2.png";

const PrinterCard = () => {
 return (
  <div className="card m-5 h-[90%]">
   <div className="flex w-full text-bold text-3xl text-red-500 justify-center">
    LOGO
   </div>

   <figure className="h-[50%] pt-3">
    <img src={printer} className="object-contain h-[30vh]" />
   </figure>
   <div className="card-body items-center h-[50%] mt-8">
    <div className="flex flex-col gap-3 w-full items-center">
     <div className="text-black">Nombre del equipo</div>
     <div className="text-black">Serie</div>
     <button className="bg-red-400">Boton raro</button>
    </div>
    {/* <div className="grid grid-rows-3 gap-3 grid-flow-col w-full">
     <div className="font-semibold text-sm text-black">Tamaño de papel:</div>
     <div className="font-semibold text-sm text-black">Almacenamiento:</div>
     <div className="font-semibold text-sm text-black">Velocidad:</div>
     <div className="font-semibold text-sm text-black">Consumibles:</div>
     <div className="font-semibold text-sm text-black">Otros:</div>
     <div className="font-semibold text-sm text-black">Otros:</div>
    </div> */}
   </div>
  </div>
 );
};

export default PrinterCard;
