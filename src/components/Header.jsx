import { NavLink, Link, useLocation } from "react-router-dom"
import SearchBar from "./SearchBar"



export default function Header() {
    const location = useLocation()
    const showSB = location.pathname.startsWith('/contacts')

    return (
        <nav className=" navbar navbar-expand-md bg-body-tertiary  d-flex justify-content-around">


            <Link className="navbar-brand" to='/'>
                <img width="50px" src="/logo.png" className="img-fluid rounded" alt="logo" />
            </Link>
            {showSB && <SearchBar />}

            <ul className="nav navbar-nav">
                <li className="nav-item">
                    <NavLink className="nav-link " to="/"> HOME </NavLink>
                </li>
                <li className="nav-item">
                    <NavLink className="nav-link" to="/contacts">RUBRICA</NavLink>
                </li>

            </ul>
        </nav>
    )
}


