import { RouterProvider } from 'react-router'
import { routes } from './routes/index.route'
import './styles/app.scss'

function App() {

  return (
   <>
    <RouterProvider router={routes}/>
   </>
  ) 
}

export default App
