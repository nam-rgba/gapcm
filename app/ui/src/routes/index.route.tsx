import { createBrowserRouter } from "react-router";
import { Home } from "../pages/home/Home";
import ComponentListing from "../pages/components/listing/ComponentListing";
import {  Permission } from "./permission";
import PageTitle from "./PageTitle";
import LayoutProvider from "../components/layout/LayoutProvider";

const appRouter = [
   {
    path: Permission.componentList,
    element: <PageTitle title="Components" element={<ComponentListing />} />,
  },
];

export const routes = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
  },
  {
    path: "/app",
    element: <LayoutProvider />,
    children: appRouter
  },
 
]);


