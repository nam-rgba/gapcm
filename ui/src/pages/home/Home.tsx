import { Link } from 'react-router'

export const Home = () => {
  return (
    <div>
        <Link to={"/components"} children={"View components"}/>
    </div>
  )
}
