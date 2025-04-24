import { Link } from "react-router-dom";
import { useTravelContext } from "../contexts/TravelContext";

import Card from "../components/Card";

export default function HomePage() {

    const { filteredViaggi } = useTravelContext()

    return (
        <div className="container text-center">
            <div className="row row-cols-1 row-cols-md-2 row-cols-lg-3">
                {filteredViaggi.map(t => (
                    <div key={t.id} className="col mb-4">
                        <Link to={`/travels/${t.id}`} >
                            <Card t={t} />
                        </Link>
                    </div>

                ))}
            </div>
        </div>
    );
}