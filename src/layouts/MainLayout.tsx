import type { FC, ReactNode } from "react";
import PropTypes from "prop-types";
import { Outlet } from "react-router-dom";
import Navbar from "../components/Navbar";

interface MainLayoutProps {
 children?: ReactNode;
}

const MainLayout: FC<MainLayoutProps> = ({ children }) => {
 return (
  <div>
   <Navbar />
   {children || <Outlet />}
  </div>
 );
};

MainLayout.propTypes = {
 children: PropTypes.node,
};

export default MainLayout;
