export default function Card({ t }) {
    return (
        <div className="card text-bg-dark">
            <img
                src={t.url}
                className="img-fluid rounded-top object-cover"
                alt={t.destinazione}
                style={{ height: "13rem", width: "100%" }}
            />
            <div className="card-body flex-grow">
                <h5 className="card-title text-center text-uppercase">{t.destinazione}</h5>

                <hr />

                <ul className="list-unstyled">
                    <li><h6 className="card-text">Inizio: {t.data_inizio}</h6></li>
                    <li><h6 className="card-text">Fine: {t.data_fine}</h6></li>
                    <li><p className="card-text">{t.viaggiatori.length} viaggiatori</p></li>
                </ul>

                <button className="btn btn-primary w-20 float-center" >Lista partecipanti</button>
            </div>
        </div >
    );
}