import { useContext, createContext, useState } from "react";
import travelData from '../data/arrayTravels'

const TravelContext = createContext()

function TravelProvider({ children }) {
    const tuttiViaggiatori = travelData.flatMap(viaggio => viaggio.viaggiatori);

    const [searchTerm, setSearchTerm] = useState('');

    const filteredViaggiatori = tuttiViaggiatori.filter(viaggiatore =>
        viaggiatore.nome.toLowerCase().includes(searchTerm.toLowerCase())
    );


    const handleSearch = (e) => {
        e.preventDefault()
        setSearchTerm(e.target.value)
    }


    const data = {
        handleSearch,
        searchTerm,
        filteredViaggiatori,

    }


    return (
        <TravelContext.Provider value={data}>
            {children}
        </TravelContext.Provider>
    )
}

const useTravelContext = () => useContext(TravelContext)

export { TravelProvider, useTravelContext }