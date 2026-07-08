import { createBrowserRouter } from "react-router";
import ComponentListing from "../pages/components/listing/ComponentListing";
import PageTitle from "./PageTitle";
import LayoutProvider from "../components/layout/LayoutProvider";

const appRouter = [
   {
    path: "/ui-components",
    element: <PageTitle title="UI Components" element={<ComponentListing />} />,
  },
];

export const routes = createBrowserRouter([
  {
    path: "/",
    element: <LayoutProvider />,
    children: appRouter
  },
 
]);


