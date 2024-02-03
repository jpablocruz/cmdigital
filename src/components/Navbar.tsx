import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import { FaArrowRight } from "react-icons/fa";
import { FaChevronRight } from "react-icons/fa";
import { NavegationLinks } from "../constants/arrays";

const Navbar = () => {
 const [hovered, setHovered] = useState(false);
 const toggleHover = () => {
  setHovered(!hovered);
 };
 return (
  <div className="drawer py-2 px-24 inset-0 w-full bg-gray-50 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:163px_63px]">
   <input id="my-drawer-3" type="checkbox" className="drawer-toggle" />
   <div className="drawer-content">
    <div className="navbar bg-transparent">
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
     <div className="navbar-center font-ibmplex hidden lg:flex">
      <ul className="menu flex menu-horizontal px-1 gap-[40px]">
       {NavegationLinks.map((link) => (
        <li
         key={link.name}
         className="hover:text-gray-500 text-black text-base font-semibold"
        >
         <NavLink
          className={({ isActive }) =>
           isActive ? "text-gray-500" : "inactive"
          }
          to={link.link}
         >
          {link.name}
         </NavLink>
        </li>
       ))}
      </ul>
     </div>
     <div className="navbar-end font-ibmplex">
      <NavLink
       to={"/soporte"}
       className="btn bg-red-500 text-white h-8 min-h-0 px-3 hover:bg-black ease-in-out duration-200"
       onMouseEnter={() => toggleHover()}
       onMouseLeave={() => toggleHover()}
      >
       <div className="flex gap-3 font-ibmplex font-semibold">
        <span>Soporte</span>
        {hovered ? <FaArrowRight /> : <FaChevronRight />}
       </div>
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
     className="menu p-4 min-h-full absolute dropdown-content z-[1] w-96 bg-gray-100 text-black shadow-lg"
    >
     {NavegationLinks.map((link) => (
      <li
       key={link.name}
       className="group py-3 px-3 border-b-2 border-dashed border-b-gray-200 font-base hover:bg-red-500 hover:cursor-pointer"
      >
       <a
        className="group-hover:text-white flex justify-between"
        href={link.link}
       >
        {link.name}
        <FaArrowRight />
       </a>
      </li>
     ))}
    </ul>
   </div>
  </div>
 );
};

export default Navbar;
