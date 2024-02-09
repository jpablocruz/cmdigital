import { Suspense, lazy } from "react";
import LoadingScreen from "./components/LoadingScreen";
import MainLayout from "./layouts/MainLayout";
import type { RouteObject } from "react-router";

const Loadable = (Component: any) => (props: JSX.IntrinsicAttributes) => (
 <Suspense fallback={<LoadingScreen />}>
  <Component {...props} />
 </Suspense>
);

const Home = Loadable(lazy(() => import("./components/Home")));
const Nosotros = Loadable(lazy(() => import("./components/Nosotros")));
const GestDoc = Loadable(lazy(() => import("./components/GestDoc")));
const RentMulti = Loadable(lazy(() => import("./components/RentMulti")));

const routes: RouteObject[] = [
 {
  path: "*",
  element: <MainLayout />,
  children: [
   {
    index: true,
    element: <Home />,
   },
   {
    index: true,
    path: "nosotros",
    element: <Nosotros />,
   },
   {
    index: true,
    path: "gestion-documental",
    element: <GestDoc />,
   },
   {
    index: true,
    path: "renta-multifuncionales",
    element: <RentMulti />,
   },
  ],
 },
];

export default routes;
