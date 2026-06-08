import { Outlet } from "react-router"
import { StepsCreation } from "./components/StepsCreation"



export const CreateModule = () => {

  
  return (
    <div className="page-container">
        <StepsCreation children={<Outlet />} />
    </div>
  )
}
