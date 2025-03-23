// export default function TravelersBook({ travelData }) {
// console.log(travelData, travelData[viaggiatori])
// const viaggiatori = travelData.viaggiatori
// console.log(viaggiatori)
// const contacts = travelData.filter((t) => t.viaggiatori)
//     const tuttiViaggiatori = travelData.flatMap(viaggio => viaggio.viaggiatori)
//     console.log(tuttiViaggiatori)


//     return (

//         <ul className="list-group ">
//             <li className="list-group-item disabled">Tutti I Contatti</li>
//             {tuttiViaggiatori.map((c, i) => {
//                 return (
//                     <li key={i} className="list-group-item">{c.nome} {c.cognome} {c.cellulare}</li>
//                 )
//             })}
//         </ul>

//     )
// }

import { useState } from 'react';

export default function TravelersBook({ travelData }) {
    const tuttiViaggiatori = travelData.flatMap(viaggio => viaggio.viaggiatori);
    const [searchTerm, setSearchTerm] = useState('');

    const filteredViaggiatori = tuttiViaggiatori.filter(viaggiatore =>
        viaggiatore.nome.toLowerCase().includes(searchTerm.toLowerCase())
    );

    return (
        <div>
            <input
                type="text"
                placeholder="Cerca per nome..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
            />
            <ul className="list-group">
                <li className="list-group-item disabled">Tutti I Contatti</li>
                {filteredViaggiatori.map(({ id, nome, cognome, cellulare }) => (
                    <li key={id} className="list-group-item">
                        {nome} {cognome} {cellulare}
                    </li>
                ))}
            </ul>
        </div>
    );
}