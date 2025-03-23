export default function Accordion({ v, i }) {
    return (
        <div className=" accordion col-8 col-md-6 mx-auto " id="accordionExample">
            <div className="accordion-item p-2">
                <h2 className="accordion-header">
                    <button
                        className="accordion-button collapsed accordion-button-no-blue"
                        type="button"
                        data-bs-toggle="collapse"
                        data-bs-target={`#${v.codice_fiscale}`}
                        aria-expanded="false"
                        aria-controls={v.codice_fiscale}
                    >
                        {v.nome} {v.cognome}
                    </button>
                </h2>
                <div
                    id={v.codice_fiscale}
                    className="accordion-collapse collapse"
                    data-bs-parent="#accordionExample"
                >
                    <div className="accordion-body">

                        <p> telefono: <strong>{v.cellulare}</strong></p>
                        <p>email: {v.email}</p>
                        <p>CF: {v.codice_fiscale}</p>

                    </div>
                </div>
            </div>
        </div>
    );
}