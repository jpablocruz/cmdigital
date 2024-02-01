import React from "react";
import { Navlink } from "../interfaces/links";

const Navbar = () => {
 const NavegationLinks: Navlink[] = [
  { name: "Renta de multifuncionales", link: "/renta-multifuncionales" },
  { name: "Gestión documental", link: "/gestion-documental" },
  { name: "Clientes", link: "/gestion-documental" },
  { name: "Nosotros", link: "/gestion-documental" },
 ];
 return (
  <div className="navbar bg-white px-5 py-2">
   <div className="navbar-start">
    <div className="dropdown text-black">
     <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
      <svg
       xmlns="http://www.w3.org/2000/svg"
       className="h-5 w-5"
       fill="none"
       viewBox="0 0 24 24"
       stroke="currentColor"
      >
       <path
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="2"
        d="M4 6h16M4 12h8m-8 6h16"
       />
      </svg>
     </div>
     <ul
      tabIndex={0}
      className="menu menu-md absolute dropdown-content mt-3 z-[1] w-96 bg-gray-100"
     >
      {NavegationLinks.map((link) => (
       <li className="group py-3 px-3 border-b-2 border-x-gray-500 font-semibold hover:bg-gray-500 hover:cursor-pointer">
        <a className="group-hover:text-white">{link.name}</a>
       </li>
      ))}
     </ul>
    </div>
    <a className="btn text-lg text-black font-bold"> CM Digital</a>
   </div>
   <div className="navbar-center hidden lg:flex text-black">
    <ul className="menu menu-horizontal px-1 gap-5">
     {NavegationLinks.map((link) => (
      <li>
       <a className="hover:cursor-pointer">{link.name}</a>
      </li>
     ))}
    </ul>
   </div>
   <div className="navbar-end">
    <a className="btn bg-black text-white h-9 min-h-0 px-3">Soporte</a>
   </div>
  </div>
 );
};

export default Navbar;
