import { useState } from 'react';
import { useParams } from "react-router-dom"
import Accordion from "../components/Accordion"

export default function TravelPage({ travelData }) {
    const { id } = useParams()
    const travelFound = travelData.find(travel => travel.id == id)
    const [localSearchTerm, setLocalSearchTerm] = useState('')

    if (!travelFound) return <h1>Nessun Viaggio Trovato</h1>

    const filteredViaggiatori = travelFound.viaggiatori.filter(viaggiatore => {
        const fullName = `${viaggiatore.nome} ${viaggiatore.cognome}`.toLowerCase()
        return fullName.includes(localSearchTerm.toLowerCase())
    })

    return (
        <div className="container">
            <h1 className="text-center mb-4 text-uppercase">{travelFound.destinazione}</h1>

            <h6 className="text-center">Data inizio: {travelFound.data_inizio}</h6>
            <h6 className="text-center">Data fine: {travelFound.data_fine}</h6>

            {/* Barra di ricerca locale */}
            <div className="my-4 col-10 mx-auto">
                <input
                    type="text"
                    placeholder="Cerca viaggiatore..."
                    className="form-control me-2 text-black bg-white"
                    value={localSearchTerm}
                    onChange={(e) => setLocalSearchTerm(e.target.value)}

                />
            </div>

            {filteredViaggiatori.map(v => (
                <Accordion key={v.id} v={v} />
            ))}
        </div>
    )
}