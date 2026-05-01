import { Outlet } from "react-router"
import { StepsCreation } from "./components/StepsCreation"

interface CreateModuleProps {

}

export const CreateModule = (props: CreateModuleProps) => {
  const {} = props

  const handleCreateModule = () =>{
    
  }
  
  return (
    <div className="page-container">
        <StepsCreation children={<Outlet />} />
    </div>
  )
}
