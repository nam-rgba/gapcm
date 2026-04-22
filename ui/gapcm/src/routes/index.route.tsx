import { createBrowserRouter } from "react-router";
import { Home } from "../pages/home/Home";
import ComponentListing from "../pages/components/listing/ComponentListing";
import { Permission } from "./permission";
import { ComponentCreate } from "../pages/components/crud/ComponentCreate";
import { CreateModule } from "../pages/modules/crud/CreateModule";
import { ListingModule } from "../pages/modules/listing/ListingModule";


export const routes = createBrowserRouter([
    {
        path: "/",
        element: <Home />,
    },
    {
        path: Permission.componentList,
        element: <ComponentListing />
    },
    {
        path: Permission.componentCreate,
        element: <ComponentCreate />
    },
    {
        path: Permission.moduleCreate,
        element: <CreateModule />
    },
    {
        path: Permission.moduleList,
        element: <ListingModule />
    }

])