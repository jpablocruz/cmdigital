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

const routes: RouteObject[] = [
 {
  path: "*",
  element: <MainLayout />,
  children: [
   {
    index: true,
    element: <Home />,
   },
  ],
 },
];

export default routes;
