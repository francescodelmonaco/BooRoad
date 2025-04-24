// import { useState } from 'react'; => to Context
import Accordion from '../components/Accordion';
import { useTravelContext } from '../contexts/TravelContext';

export default function TravelersBook() {
    const { filteredViaggiatori } = useTravelContext()


    // const tuttiViaggiatori = travelData.flatMap(viaggio => viaggio.viaggiatori);
    // const [searchTerm, setSearchTerm] = useState('');

    // const filteredViaggiatori = tuttiViaggiatori.filter(viaggiatore =>
    //     viaggiatore.nome.toLowerCase().includes(searchTerm.toLowerCase())
    // ); =>to Context

    return (
        <div className=''>
            <h1 className='text-center mb-5'>RUBRICA CONTATTI:</h1>

            {filteredViaggiatori.map((v, i) => {
                return (
                    <Accordion key={i} v={v} />
                )
            })
            }
        </div>
    );
}