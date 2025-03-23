// import { useState } from 'react';
import Accordion from '../components/Accordion';
import { useTravelContext } from '../contexts/TravelContext';

export default function TravelersBook({ travelData }) {
    const { filteredViaggiatori } = useTravelContext()


    // const tuttiViaggiatori = travelData.flatMap(viaggio => viaggio.viaggiatori);
    // const [searchTerm, setSearchTerm] = useState('');

    // const filteredViaggiatori = tuttiViaggiatori.filter(viaggiatore =>
    //     viaggiatore.nome.toLowerCase().includes(searchTerm.toLowerCase())
    // );

    return (
        <div>
            {/* <input
                type="text"
                placeholder="Cerca per nome..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
            /> */}

            {filteredViaggiatori.map((v, i) => {
                return (
                    <Accordion key={i} v={v} />
                )
            })
            }
        </div>
    );
}