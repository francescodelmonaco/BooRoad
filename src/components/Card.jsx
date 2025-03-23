export default function Card({ t }) {

    return (
        <div key={t.id} className="book my-3">
            <ul>
                <li><h3>{t.destinazione}</h3></li>
                <li><h5>{t.data_inizio}</h5></li>
                <li><h5>{t.data_fine}</h5></li>
                <li><p>gruppo di {(t.viaggiatori).length} viaggiatori</p></li>
            </ul>


            <div className="cover">
                <img src={t.url} className="img-fluid img-thumbnail" alt={t.destinazione} />
            </div>
        </div>
    )

}