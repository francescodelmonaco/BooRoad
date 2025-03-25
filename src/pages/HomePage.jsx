import { Link } from "react-router-dom";

import Card from "../components/Card";

export default function HomePage({ travelData }) {
    return (
        <div className="container mt-4">
            <div className="row row-cols-1 row-cols-md-2 row-cols-lg-3 g-4 justify-content-center">
                {travelData.map(t => (
                    <div key={t.id} className="col d-flex justify-content-center">
                        <Link to={`/travels/${t.id}`} >
                            <Card t={t} />
                        </Link>
                    </div>
                ))}
            </div>
        </div>
    );
}