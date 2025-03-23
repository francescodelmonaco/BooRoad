import { useParams } from "react-router-dom"
import Accordion from "../components/Accordion"



export default function TravelPage({ travelData }) {
    const { id } = useParams()
    const travelFound = travelData.find(travel => travel.id == id)

    const viaggiatori = travelFound.viaggiatori

    //handle error
    !travelFound && <h1>Nessun Viaggio Trovato</h1>

    return (

        <div className="container">

            {viaggiatori.map(v => {
                return (
                    <Accordion key={v.id} v={v} />
                )
            })
            }
        </div>
    )
}
