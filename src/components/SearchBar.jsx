import { useTravelContext } from "../contexts/TravelContext"


export default function SearchBar() {

    const { searchTerm, handleSearch, handleSubmit } = useTravelContext();
    return (
        <form className="d-flex my-2 my-lg-0 " onSubmit={handleSubmit} >

            <input
                type="text"
                placeholder="cerca in rubrica..."
                value={searchTerm}
                onChange={handleSearch}
            />

        </form>
    )
}