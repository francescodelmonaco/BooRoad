import { useTravelContext } from "../contexts/TravelContext"


export default function SearchBar() {

    const { searchTerm, handleSearch, handleSubmit } = useTravelContext();
    return (
        <form className=" " onSubmit={handleSubmit} >
            <input
                type="text"
                placeholder="contatti in rubrica..."
                value={searchTerm}
                onChange={handleSearch}
            />
        </form>
    )
}