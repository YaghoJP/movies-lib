import { Link } from "react-router-dom"

const Navbar = () => {
  return (
    <nav id='navbar'>
        <h2>
            <Link to='/'>MoviesLib</Link>
        </h2>
        <Link to='/movie/1'>MoviesLib</Link>
        <Link to='/search'>MoviesLib</Link>
    </nav>

  )
}

export default Navbar