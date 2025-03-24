import { NavLink, Link, useLocation } from "react-router-dom"
import SearchBar from "./SearchBar"

export default function Header() {
    const location = useLocation()
    const showSB = location.pathname.startsWith('/contacts')

    return (

    <nav class="navbar navbar-expand-lg bg-body-tertiary">
        <div class="container-fluid">
            <Link className="navbar-brand" to='/'>
                <img width="50px" src="/logo.png" className="img-fluid rounded" alt="logo" />
            </Link>

            {showSB && <SearchBar />}


       
            <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#menuHamburger" 
            aria-controls="menuHamburger" aria-expanded="false" aria-label="Toggle navigation">
                <span class="navbar-toggler-icon"></span>
            </button>

    
            <div class="collapse navbar-collapse" id="menuHamburger">
                <ul class="navbar-nav me-auto mb-2 mb-lg-0">
                    <li class="nav-item">
                        <NavLink className="nav-link " to="/"> HOME </NavLink>
                    </li>
                    <li class="nav-item">
                        <NavLink className="nav-link" to="/contacts">RUBRICA</NavLink>
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


