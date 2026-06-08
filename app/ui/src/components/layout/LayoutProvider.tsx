
import { Outlet } from "react-router"
import { Header } from "./headers/Header"

const LayoutProvider = () => {
  return (
    <div>
      <Header
        items={[]}
        logoUrl=""
      />
      <Outlet />
    </div>
  )
}

export default LayoutProvider