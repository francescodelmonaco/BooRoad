// import Card from "../components/Card"
import { Link } from "react-router-dom"
import Card from "../components/Card"

export default function HomePage({ travelData }) {
    // const { id, viaggiatori, data_fine, data_inizio, destinazione } = travelData

    return (
        // SENZA COMPONENTE
        <div className="container row row-cols-2 mx-auto ">
            {
                travelData.map(t => {
                    return (
                        <Link to={`/travels/${t.id}`}>
                            <Card t={t} />
                        </Link>
                    )

                })
            }
        </div>
    )

}