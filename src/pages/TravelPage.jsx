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

            <h1 className="text-center py-4" >{travelFound.destinazione}</h1>



            {viaggiatori.map(v => {
                return (
                    <Accordion key={v.id} v={v} />
                )
            })
            }
        </div>
    )
}
