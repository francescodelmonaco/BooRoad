import { NavLink, Link, useLocation } from "react-router-dom"
import SearchBar from "./SearchBar"



export default function Header() {
    const location = useLocation()
    const showSB = location.pathname.startsWith('/contacts')

    return (
        <nav className="p-4 navbar navbar-expand-lg bg-body-tertiary  d-flex justify-content-between">


            <Link className="navbar-brand" to='/'>
                <img width="50px" src="/logo.png" className="img-fluid" alt="" />
            </Link>

            <ul className="nav navbar-nav">
                <li className="nav-item">
                    <NavLink className="nav-link " to="/"> HOME </NavLink>
                </li>
                <li className="nav-item">
                    <NavLink className="nav-link" to="/contacts">RUBRICA</NavLink>
                </li>
                <li>
                    {showSB && <SearchBar />}
                </li>
            </ul>
        </nav>
    )
}


