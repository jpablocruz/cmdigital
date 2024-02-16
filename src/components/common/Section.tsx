import React, { ReactNode } from "react";
import SectionGuidelines from "../SectionGuidelines";

interface SectionProps {
 height: number;
 heightM: number;
 heightL: number;
 color: string;
 children: ReactNode;
}

const Section = ({
 children,
 height,
 heightM,
 heightL,
 color,
}: SectionProps) => {
 const concatClassName = "flex relative px-4 z-10";
 return (
  <div className={concatClassName}>
   <SectionGuidelines
    height={height}
    heightM={heightM}
    heightL={heightL}
    color={color}
   />
   <div>{children}</div>
  </div>
 );
};

export default Section;
