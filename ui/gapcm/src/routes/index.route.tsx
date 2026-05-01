import { createBrowserRouter } from "react-router";
import { Home } from "../pages/home/Home";
import ComponentListing from "../pages/components/listing/ComponentListing";
import { Permission } from "./permission";
import { CreateModule } from "../pages/modules/crud/CreateModule";
import { ListingModule } from "../pages/modules/listing/ListingModule";
import { Information } from "../pages/modules/crud/components/form/Infomation";

export const routes = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
  },
  {
    path: Permission.componentList,
    element: <ComponentListing />,
  },
  {
    path: Permission.moduleCreate,
    element: <CreateModule />,
    children: [
      {
        path: "module-info",
        element: <Information />,
      },
      {
        path: "module-field",
        element: <div>Fields and Relationships</div>,
      },
      {
        path: "module-prermission",
        element: <div>Permissions</div>,
      }
    ],
  },
  {
    path: Permission.moduleList,
    element: <ListingModule />,
  },
]);
