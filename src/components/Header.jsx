import { NavLink } from "react-router-dom"
import SearchBar from "./SearchBar"


export default function Header() {
    return (
        <nav className="navbar navbar-expand  d-flex justify-content-around">
            <ul className="nav navbar-nav">
                <li className="nav-item">
                    <NavLink className="nav-link " to="/" aria-current="page"> HOME </NavLink>
                </li>
                <li className="nav-item">
                    <NavLink className="nav-link" to="/travels">VIAGGIATORI</NavLink>
                </li>
                <li>
                    {/* <SearchBar /> */}
                </li>
            </ul>
        </nav>
    )
}


