import { Link } from "react-router-dom"
import Card from "../components/Card"

export default function HomePage({ travelData }) {

    return (

        <div className="container row row-cols-1 row-cols-md-2 g-4 justify-content-center align-items-center mx-auto ">

            {
                travelData.map(t => {
                    return (
                        <Link className="col" key={t.id} to={`/travels/${t.id}`}>
                            <Card t={t} />
                        </Link>
                    )

                })
            }
        </div>
    )

}