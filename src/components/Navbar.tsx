import React from "react";
import { Navlink } from "../interfaces/links";
import { NavLink } from "react-router-dom";

const Navbar = () => {
 const NavegationLinks: Navlink[] = [
  { name: "Renta de multifuncionales", link: "/renta-multifuncionales" },
  { name: "Gestión documental", link: "/gestion-documental" },
  { name: "Clientes", link: "/clientes" },
  { name: "Nosotros", link: "/nosotros" },
 ];
 return (
  <div className="drawer bg-white py-2 px-10">
   <input id="my-drawer-3" type="checkbox" className="drawer-toggle" />
   <div className="drawer-content">
    <div className="navbar bg-white">
     <div className="navbar-start lg:hidden text-black">
      <label
       htmlFor="my-drawer-3"
       aria-label="open sidebar"
       className="btn btn-square btn-ghost"
      >
       <svg
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 24 24"
        className="inline-block w-6 h-6 stroke-current"
       >
        <path
         strokeLinecap="round"
         strokeLinejoin="round"
         strokeWidth="2"
         d="M4 6h16M4 12h16M4 18h16"
        ></path>
       </svg>
      </label>
     </div>
     <div className="navbar-start flex justify-center lg:justify-start">
      <NavLink
       to="/"
       className="btn p-0 text-lg text-black font-bold hover:cursor-pointer"
      >
       CM Digital
      </NavLink>
     </div>
     <div className="navbar-center hidden lg:flex text-black">
      <ul className="menu menu-horizontal px-1 gap-5">
       {NavegationLinks.map((link) => (
        <li className="border-2 border-white hover:border-b-black">
         <NavLink
          className={({ isActive }) => (isActive ? "text-red-600" : "inactive")}
          to={link.link}
         >
          {link.name}
         </NavLink>
        </li>
       ))}
      </ul>
     </div>
     <div className="navbar-end">
      <NavLink
       to={"/soporte"}
       className="btn bg-black text-white h-8 min-h-0 px-3"
      >
       Soporte
      </NavLink>
     </div>
    </div>
   </div>
   <div className="drawer-side">
    <label
     htmlFor="my-drawer-3"
     aria-label="close sidebar"
     className="drawer-overlay"
    ></label>
    <ul
     tabIndex={0}
     className="menu p-4 min-h-full absolute dropdown-content z-[1] w-96 bg-gray-100 text-black"
    >
     {NavegationLinks.map((link) => (
      <li className="group py-3 px-3 border-b-2 border-x-gray-500 font-semibold hover:bg-gray-500 hover:cursor-pointer">
       <a className="group-hover:text-white" href={link.link}>
        {link.name}
       </a>
      </li>
     ))}
    </ul>
   </div>
  </div>
 );
};

export default Navbar;
