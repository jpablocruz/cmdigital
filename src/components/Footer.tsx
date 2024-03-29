import React from "react";
import { MdPrivacyTip } from "react-icons/md";
import { NavLink } from "react-router-dom";
import { ContactLinks } from "../constants/arrays";
import { NavegationLinks } from "../constants/arrays";
import SectionGuidelines from "./SectionGuidelines";

const Footer = () => {
 return (
  <>
   <footer className="footer relative h-[70vh] lg:gap-24 md:gap-12 lg:h-[30vh] md:h-[30vh] lg:px-32 md:px-16 text-black font-ibmplex">
    <SectionGuidelines
     height={70}
     heightM={30}
     heightL={30}
     color="bg-gray-50"
    />
    <nav className="relative py-8 lg:px-4">
     <h6 className="relative footer-title font-bold text-gray-500 pb-3">
      Navegación
     </h6>
     {NavegationLinks.map((link) => (
      <NavLink
       key={link.name}
       to={link.link}
       className="relative hover:text-gray-500 py-1"
      >
       {link.name}
      </NavLink>
     ))}
    </nav>
    <nav className="py-8 lg:px-4">
     <h6 className="relative footer-title font-bold text-gray-500 pb-3">
      Contactos
     </h6>
     {ContactLinks.map((link) => (
      <a
       key={link.name}
       className="relative group flex gap-4 items-center py-1"
       href={link.link}
      >
       <link.icon className="relative group-hover:text-gray-500" />
       <span className="group-hover:text-gray-500">{link.info}</span>
      </a>
     ))}
    </nav>
    <nav className="py-8 lg:px-4">
     <h6 className="relative footer-title font-bold text-gray-500 pb-3">
      Cotiza o Contáctanos
     </h6>
     <a className="relative link link-hover">
      Aqui pondremos una caja para mandar un correo
     </a>
    </nav>
   </footer>
   <footer className="relative footer bottom-0 px-32 h-[27vh] md:h-[11vh] lg:h-[10vh] border-t text-black font-ibmplex border-gray-300">
    <SectionGuidelines
     height={27}
     heightM={11}
     heightL={10}
     color="bg-gray-50"
    />
    <div className="flex flex-col md:flex-row lg:flex-row relative gap-8 md:gap-6 lg:gap-24 pt-4 items-center justify-between w-[100%] px-4">
     <aside className="relative items-center grid-flow-col">
      <p>© CM Digital 2024</p>
     </aside>
     <aside className="relative items-center grid-flow-col flex gap-3">
      <MdPrivacyTip className="text-blue-600" />
      <p>Aviso de privacidad</p>
     </aside>
     <aside className="relative items-center grid-flow-col">
      <p>
       Desarrollado por <u>Pablo Cruz.</u>
      </p>
     </aside>
     <nav className="relative md:place-self-center justify-self-end">
      <div className="relative grid grid-flow-col gap-4">
       <a>
        <svg
         xmlns="http://www.w3.org/2000/svg"
         width="24"
         height="24"
         viewBox="0 0 24 24"
         className="fill-current"
        >
         <path d="M24 4.557c-.883.392-1.832.656-2.828.775 1.017-.609 1.798-1.574 2.165-2.724-.951.564-2.005.974-3.127 1.195-.897-.957-2.178-1.555-3.594-1.555-3.179 0-5.515 2.966-4.797 6.045-4.091-.205-7.719-2.165-10.148-5.144-1.29 2.213-.669 5.108 1.523 6.574-.806-.026-1.566-.247-2.229-.616-.054 2.281 1.581 4.415 3.949 4.89-.693.188-1.452.232-2.224.084.626 1.956 2.444 3.379 4.6 3.419-2.07 1.623-4.678 2.348-7.29 2.04 2.179 1.397 4.768 2.212 7.548 2.212 9.142 0 14.307-7.721 13.995-14.646.962-.695 1.797-1.562 2.457-2.549z"></path>
        </svg>
       </a>
       <a>
        <svg
         xmlns="http://www.w3.org/2000/svg"
         width="24"
         height="24"
         viewBox="0 0 24 24"
         className="fill-current"
        >
         <path d="M19.615 3.184c-3.604-.246-11.631-.245-15.23 0-3.897.266-4.356 2.62-4.385 8.816.029 6.185.484 8.549 4.385 8.816 3.6.245 11.626.246 15.23 0 3.897-.266 4.356-2.62 4.385-8.816-.029-6.185-.484-8.549-4.385-8.816zm-10.615 12.816v-8l8 3.993-8 4.007z"></path>
        </svg>
       </a>
       <a>
        <svg
         xmlns="http://www.w3.org/2000/svg"
         width="24"
         height="24"
         viewBox="0 0 24 24"
         className="fill-current"
        >
         <path d="M9 8h-3v4h3v12h5v-12h3.642l.358-4h-4v-1.667c0-.955.192-1.333 1.115-1.333h2.885v-5h-3.808c-3.596 0-5.192 1.583-5.192 4.615v3.385z"></path>
        </svg>
       </a>
      </div>
     </nav>
    </div>
   </footer>
  </>
 );
};

export default Footer;
