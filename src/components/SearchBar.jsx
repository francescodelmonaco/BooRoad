import { useTravelContext } from "../contexts/TravelContext"


export default function SearchBar() {


    const { searchTerm, handleSearch, handleSubmit, refSearch } = useTravelContext();
    return (
        <form className=" " onSubmit={handleSubmit} >
            <input
                ref={refSearch}
                type="text"
                placeholder="contatti in rubrica..."
                value={searchTerm}
                onChange={handleSearch}
            />
        </form>
    )
}