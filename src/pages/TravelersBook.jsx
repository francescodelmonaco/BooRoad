export default function TravelersBook({ travelData }) {
    // console.log(travelData, travelData[viaggiatori])
    // const viaggiatori = travelData.viaggiatori
    // console.log(viaggiatori)
    // const contacts = travelData.filter((t) => t.viaggiatori)
    const tuttiViaggiatori = travelData.flatMap(viaggio => viaggio.viaggiatori)
    console.log(tuttiViaggiatori)


    return (

        <ul className="list-group ">
            <li className="list-group-item disabled">Tutti I Contatti</li>
            {tuttiViaggiatori.map((c, i) => {
                return (
                    <li key={i} className="list-group-item">{c.nome} {c.cognome} {c.cellulare}</li>
                )
            })}
        </ul>

    )
}