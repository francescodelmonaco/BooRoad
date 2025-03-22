// import Card from "../components/Card"
import { Link } from "react-router-dom"

export default function HomePage({ travelData }) {
    // const { id, viaggiatori, data_fine, data_inizio, destinazione } = travelData

    return (
        // SENZA COMPONENTE
        <div className="container row row-cols-3">
            {
                travelData.map(t => {
                    return (

                        <div key={t.id} className="book d-flex ">
                            <h3>{t.destinazione}</h3>
                            <h5>{t.data_inizio}</h5>
                            <h5>{t.data_fine}</h5>
                            <p>numero viaggiatori: {(t.viaggiatori).length}</p>
                            <div className="cover">
                                <img src={t.url} alt={t.destinazione} />
                            </div>
                        </div>
                    )

                })
            }
        </div>
    )

}