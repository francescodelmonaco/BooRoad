import { NavLink, useLocation } from "react-router-dom"
import SearchBar from "./SearchBar"



export default function Header() {
    const location = useLocation()
    const showSB = location.pathname.startsWith('/contacts')

    return (
        <nav className="navbar navbar-expand  d-flex justify-content-center align-items-center">
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


