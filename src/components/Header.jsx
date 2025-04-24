import { NavLink, Link, useLocation } from "react-router-dom"
import SearchBar from "./SearchBar"

export default function Header() {
    const location = useLocation()
    const showSearchBar = location.pathname.startsWith("/travels")

    return (
        <nav className="navbar navbar-expand-xl bg-body-tertiary">
            <div className="container-fluid">
                <Link className="navbar-brand" to='/'>
                    <img width="50px" src="/logo.png" className="img-fluid rounded" alt="logo" />
                </Link>

                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#menuHamburger"
                    aria-controls="menuHamburger" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>

                <div className="collapse navbar-collapse d-flex justify-content-center justify-content-xl-end" id="menuHamburger">
                    <ul className="navbar-nav">
                        <li className="nav-item text-center p-1">
                            <NavLink className="nav-link " to="/">Home</NavLink>
                        </li>

                        <li className="nav-item text-center p-1">
                            <NavLink className="nav-link" to="/contacts">Rubrica</NavLink>
                        </li>

                        <li className="nav-item text-center p-1">
                            {!showSearchBar && <SearchBar />}
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
    )
}


