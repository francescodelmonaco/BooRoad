import { useTravelContext } from "../contexts/TravelContext"



export default function SearchBar(/*{ props }*/) {

    const { searchTerm, handleSearch } = useTravelContext();
    return (
        <form className="d-flex my-2 my-lg-0 " /*onSubmit={#}*/ >
            {/* <input
                className="form-control me-sm-2"
                type="text"
                placeholder="Search"
            /> */}
            <input
                type="text"
                placeholder="Cerca per nome..."
                value={searchTerm}
                onChange={handleSearch}
            />
            <button
                className="btn btn-outline-success my-2 my-sm-0"
                type="submit"
            >
                Search
            </button>
        </form>
    )
}