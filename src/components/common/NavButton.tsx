import React, { useState, ButtonHTMLAttributes, ReactNode } from "react";
import { NavLink } from "react-router-dom";
import { FaArrowRight, FaChevronRight } from "react-icons/fa";
import { VariantProps, cva } from "class-variance-authority";
import cn from "../../utils/cn";

interface NavButtonProps
 extends ButtonHTMLAttributes<HTMLButtonElement>,
  VariantProps<typeof NavButtonVariants> {
 children: ReactNode;
 link: string;
}

const NavButtonVariants = cva(
 "font-poppins rounded items-center justify-center",
 {
  variants: {
   variant: {
    primary:
     "btn bg-red-500 text-white h-8 min-h-0 px-3 hover:bg-black ease-in-out duration-200",
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

const NavButton = ({
 children,
 className,
 variant,
 size,
 link,
 ...props
}: NavButtonProps) => {
 const [hovered, setHovered] = useState(false);
 const toggleHover = () => {
  setHovered(!hovered);
 };

 return (
  <NavLink to={link}>
   <button
    className={cn(NavButtonVariants({ variant, size, className }))}
    {...props}
    onMouseEnter={() => toggleHover()}
    onMouseLeave={() => toggleHover()}
   >
    <div className="font-ibmplex font-semibold pr-3">{children}</div>
    {hovered ? <FaArrowRight /> : <FaChevronRight />}
   </button>
  </NavLink>
 );
};

export default NavButton;
