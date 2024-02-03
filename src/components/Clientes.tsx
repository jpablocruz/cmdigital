import React from "react";
import { Clients } from "../constants/arrays";

const Clientes = () => {
 return (
  <div className="grid grid-cols-4 gap-y-8 gap-x-0 w-screen max-h-30 px-40 pb-36 justify-between items-center">
   {Clients.map((client) => (
    <div className="flex items-center justify-center">
     <div className="text-black bg-red-400">{client.name}</div>
    </div>
   ))}
  </div>
 );
};

export default Clientes;
