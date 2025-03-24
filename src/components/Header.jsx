import { NavLink, Link } from "react-router-dom"
import SearchBar from "./SearchBar"

export default function Header() {
    return (

        <nav className="navbar navbar-expand-lg bg-body-tertiary">
            <div className="container-fluid">
                <Link className="navbar-brand" to='/'>
                    <img width="50px" src="/logo.png" className="img-fluid rounded" alt="logo" />
                </Link>

                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#menuHamburger"
                    aria-controls="menuHamburger" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>

                <div className="collapse navbar-collapse" id="menuHamburger">
                    <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                        <li className="nav-item">
                            <NavLink className="nav-link " to="/"> HOME </NavLink>
                        </li>
                        <li className="nav-item">
                            <NavLink className="nav-link" to="/contacts">RUBRICA</NavLink>
                        </li>
                        <li className="nav-item">
                            <SearchBar />
                        </li>
                    </ul>


                    {/*<form class="d-flex">
                    <input class="form-control me-2" type="search" placeholder="Cerca..." aria-label="Search"/>
                    <button class="btn btn-outline-success" type="submit">Cerca</button>
                </form>*/}
                </div>
            </div>
        </nav>




    )

}


