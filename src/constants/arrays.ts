import { FaLocationDot } from "react-icons/fa6";
import { Client, ContactLink, Navlink } from "../interfaces/links";
import { FaEnvelope, FaPhoneAlt } from "react-icons/fa";
import { IoLogoWhatsapp } from "react-icons/io";
import telcelLogo from "../images/telcel.png";

export const NavegationLinks: Navlink[] = [
 { name: "Renta de multifuncionales", link: "/renta-multifuncionales" },
 { name: "Gestión documental", link: "/gestion-documental" },
 { name: "Nosotros", link: "/nosotros" },
];

export const Clients: Client[] = [
 {
  name: "telcel",
  logo: telcelLogo,
 },
 {
  name: "CFE",
  logo: telcelLogo,
 },
 {
  name: "casas geo",
  logo: telcelLogo,
 },
 {
  name: "Gobierno de NL",
  logo: telcelLogo,
 },
 {
  name: "UANL",
  logo: telcelLogo,
 },
 {
  name: "CLiente 2",
  logo: telcelLogo,
 },
 {
  name: "Cliente 3",
  logo: telcelLogo,
 },
 {
  name: "Cliente 4",
  logo: telcelLogo,
 },
];

export const ContactLinks: ContactLink[] = [
 {
  name: "whatsapp",
  info: "+52 81 1717 0404",
  link: "#",
  icon: IoLogoWhatsapp,
 },
 { name: "telefono", info: "+52 81 0404 6444", link: "#", icon: FaPhoneAlt },
 {
  name: "correo",
  info: "cmcopiadoras@gmail.com",
  link: "#",
  icon: FaEnvelope,
 },
 {
  name: "ubicacion",
  info: "Reforma #999 Zona centro",
  link: "#",
  icon: FaLocationDot,
 },
];
