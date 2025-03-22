import {
    Outlet,
    useLocation
} from "react-router-dom";
import Header from "../components/Header";
import SearchBar from "../components/SearchBar";


export default function DefaultLayout() {

    const location = useLocation()
    const showSB = location.pathname.startsWith('/travels/')

    return (
        <>
            <Header >
            //task condizione per rendere visibile la sb SOLO nella rotta che inizia con /travels
                {showSB && <SearchBar />}
            </Header>
            <main>
                <Outlet />
            </main>
        </>
    )
}