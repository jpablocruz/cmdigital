import React, { useState, ButtonHTMLAttributes, ReactNode } from "react";
import { NavLink } from "react-router-dom";
import { FaArrowRight, FaChevronRight } from "react-icons/fa";
import { VariantProps, cva } from "class-variance-authority";
import cn from "../../utils/cn";

interface NavButtonProps
 extends ButtonHTMLAttributes<HTMLButtonElement>,
  VariantProps<typeof NavButtonVariants> {
 children: ReactNode;
}

const NavButtonVariants = cva(
 "font-poppins rounded items-center justify-center",
 {
  variants: {
   variant: {
    primary:
     "bg-purple text-white font-normal hover:bg-purple_dark active:bg-purple_darker disabled:opacity-40",
    secondary:
     "bg-green text-white font-normal hover:bg-green_dark active:bg-green_darker",
    transparent:
     "bg-none text-purple font-normal hover:text-purple_dark active:bg-purple_darker active:text-white",
   },
   size: {
    sm: "text-sm px-4 py-1",
    md: "text-base px-4 py-1",
    lg: "text-xl px-4 py-1",
   },
  },
  defaultVariants: {
   variant: "primary",
   size: "md",
  },
 }
);

const NavButton = (
 { children, className, variant, size, ...props }: NavButtonProps,
 link: string
) => {
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
    {children}
    {hovered ? <FaArrowRight /> : <FaChevronRight />}
   </div>
  </NavLink>
 );
};

export default NavButton;
