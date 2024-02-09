import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import { FaArrowRight, FaChevronRight } from "react-icons/fa";
import { NavButtonProps } from "../../interfaces/links";

const NavButton = ({ link }: NavButtonProps) => {
 const [hovered, setHovered] = useState(false);
 const toggleHover = () => {
  setHovered(!hovered);
 };

 return (
  <NavLink
   to={link}
   className="btn bg-red-500 text-white h-8 min-h-0 px-3 hover:bg-black ease-in-out duration-200"
   onMouseEnter={() => toggleHover()}
   onMouseLeave={() => toggleHover()}
  >
   <div className="flex gap-3 font-ibmplex font-semibold">
    <span>Soporte</span>
    {hovered ? <FaArrowRight /> : <FaChevronRight />}
   </div>
  </NavLink>
 );
};

export default NavButton;
