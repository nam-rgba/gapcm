import { createBrowserRouter } from "react-router";
import { Home } from "../pages/home/Home";
import ComponentListing from "../pages/components/listing/ComponentListing";
import { ModuleCreateStep, Permission } from "./permission";
import { CreateModule } from "../pages/modules/crud/CreateModule";
import { ListingModule } from "../pages/modules/listing/ListingModule";
import { Information } from "../pages/modules/crud/components/form/Infomation";
import PageTitle from "./PageTitle";
import LayoutProvider from "../components/layout/LayoutProvider";

const appRouter = [
   {
    path: Permission.componentList,
    element: <PageTitle title="Components" element={<ComponentListing />} />,
  },
  {
    path: Permission.moduleCreate,
    element: (
      <PageTitle
        title="Create Module"
        element={<CreateModule />}
      />
    ),
    children: [
      {
        path: ModuleCreateStep.Information,
        element: <Information />,
      },
      {
        path: ModuleCreateStep.Field,
        element: <div>Fields and Relationships</div>,
      },
      {
        path: ModuleCreateStep.Permission,
        element: <div>Permissions</div>,
      },
    ],
  },
  {
    path: Permission.moduleList,
    element: <ListingModule />,
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


