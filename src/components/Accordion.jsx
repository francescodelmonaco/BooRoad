export default function Accordion({ v }) {
    return (
        <div className=" accordion col-8 col-md-6 mx-auto " id="accordionExample">
            <div className="accordion-item p-2">
                <h2 className="accordion-header">
                    <button
                        className="accordion-button collapsed accordion-button-no-blue"
                        type="button"
                        data-bs-toggle="collapse"
                        data-bs-target={`#${v.id}`}
                        aria-expanded="false"
                        aria-controls={v.id}
                    >
                        {v.nome} {v.cognome}
                    </button>
                </h2>
                <div
                    id={v.id}
                    className="accordion-collapse collapse"
                    data-bs-parent="#accordionExample"
                >
                    <div className="accordion-body">

                        <p> <strong>{v.codice_fiscale}</strong></p>
                        <p>{v.email}</p>
                        <p>{v.cellulare}</p>

                    </div>
                </div>
            </div>
        </div>
    );
}