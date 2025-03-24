import { useTravelContext } from "../contexts/TravelContext";

export default function SearchBar() {
    const { searchTerm, handleSearch, handleSubmit, refSearch } = useTravelContext();
    return (
        <form className="container d-flex mb-3" onSubmit={handleSubmit} >
            <input
                ref={refSearch}
                type="text"
                placeholder="Cerca contatto"
                value={searchTerm}
                onChange={handleSearch}
                className="form-control me-2 text-black bg-white"
            />
            <button className="btn" type="submit">Cerca</button>
        </form >
    )
};