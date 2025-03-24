export default function Card({ t }) {

    return (
        <div key={t.id} className="book gy-3">
            <ul>
                <li><h3>{t.destinazione}</h3></li>
                <li><h5>inizio {t.data_inizio}</h5></li>
                <li><h5>fine {t.data_fine}</h5></li>
                <li><p>{(t.viaggiatori).length} viaggiatori</p></li>
            </ul>


            <div className="cover">
                <img src={t.url} className="img-fluid img-thumbnail" alt={t.destinazione} />
                <p className="position-absolute top-0 end-0 px-3 py-2  "><strong>{t.destinazione}</strong></p>
            </div>
        </div>

        // <div className="card  text-bg-dark">
        //     <img src={t.url} className="img-fluid card-img" alt="..." />
        //     <div className="card-img-overlay">
        //         <ul>
        //             <li><h3 className="card-title">{t.destinazione}</h3></li>
        //             <li><h5 className="card-text">inizio {t.data_inizio}</h5></li>
        //             <li><h5 className="card-text">fine {t.data_fine}</h5></li>
        //             <li><p className="card-text">{(t.viaggiatori).length} viaggiatori</p></li>
        //         </ul>
        //     </div>
        // </div>

        // <div className="card mb-3" style={`"max-width: 540px;"`}>
        //     <div className="row g-0">
        //         <div className="col-md-4">
        //             <img src={t.url} className="img-fluid rounded-start" alt={t.destinazione} />
        //         </div>
        //         <div className="col-md-8">
        //             <div className="card-body">
        //                 <h5 className="card-title">{t.destinazione}</h5>
        //                 <p className="card-text"><small className="text-body-secondary">{t.data_inizio}</small></p>
        //                 <p className="card-text"><small className="text-body-secondary">{t.data_fine}</small></p>
        //                 <p className="card-text">{(t.viaggiatori).length} viaggiatori</p>
        //             </div>
        //         </div>
        //     </div>
        // </div>







    )

}