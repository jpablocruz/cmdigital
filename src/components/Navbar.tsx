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
  <div className="drawer text-black">
   <input id="my-drawer-3" type="checkbox" className="drawer-toggle" />
   <div className="drawer-content flex flex-col">
    <div className="w-full navbar bg-white">
     <div className="flex-none lg:hidden">
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
     <div className="flex-1 px-2 mx-2">Navbar Title</div>
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
      <a className="btn bg-black text-white h-9 min-h-0 px-3">Soporte</a>
     </div>
    </div>
    {/* Page content here */}
   </div>
   <div className="drawer-side">
    <label
     htmlFor="my-drawer-3"
     aria-label="close sidebar"
     className="drawer-overlay"
    ></label>
    <ul className="menu p-4 w-80 min-h-full bg-base-200">
     {/* Sidebar content here */}
     <li>
      <a>Sidebar Item 1</a>
     </li>
     <li>
      <a>Sidebar Item 2</a>
     </li>
    </ul>
   </div>
  </div>
  //   <div className="navbar bg-white px-5 py-2">
  //    <div className="navbar-start">
  //     <div className="dropdown text-black">
  //      <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
  //       <svg
  //        xmlns="http://www.w3.org/2000/svg"
  //        className="h-5 w-5"
  //        fill="none"
  //        viewBox="0 0 24 24"
  //        stroke="currentColor"
  //       >
  //        <path
  //         strokeLinecap="round"
  //         strokeLinejoin="round"
  //         strokeWidth="2"
  //         d="M4 6h16M4 12h8m-8 6h16"
  //        />
  //       </svg>
  //      </div>
  //      <ul
  //       tabIndex={0}
  //       className="menu menu-md absolute dropdown-content mt-3 z-[1] w-96 bg-gray-100"
  //      >
  //       {NavegationLinks.map((link) => (
  //        <li className="group py-3 px-3 border-b-2 border-x-gray-500 font-semibold hover:bg-gray-500 hover:cursor-pointer">
  //         <a className="group-hover:text-white" href={link.link}>
  //          {link.name}
  //         </a>
  //        </li>
  //       ))}
  //      </ul>
  //     </div>
  //     <NavLink
  //      to="/"
  //      className="btn text-lg text-black font-bold hover:cursor-pointer"
  //     >
  //      CM Digital
  //     </NavLink>
  //    </div>
  //    <div className="navbar-center hidden lg:flex text-black">
  //     <ul className="menu menu-horizontal px-1 gap-5">
  //      {NavegationLinks.map((link) => (
  //       <li className="border-2 border-white hover:border-b-black">
  //        <NavLink
  //         className={({ isActive }) => (isActive ? "text-red-600" : "inactive")}
  //         to={link.link}
  //        >
  //         {link.name}
  //        </NavLink>
  //       </li>
  //      ))}
  //     </ul>
  //    </div>
  //    <div className="navbar-end">
  //     <a className="btn bg-black text-white h-9 min-h-0 px-3">Soporte</a>
  //    </div>
  //   </div>
 );
};

export default Navbar;
