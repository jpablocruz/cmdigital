import { IconType } from "react-icons";
export interface Navlink {
 name: string;
 link: string;
}

export interface ContactLink {
 name: string;
 info: string;
 link: string;
 icon: IconType;
}

export interface Client {
 name: string;
 logo: string;
}
