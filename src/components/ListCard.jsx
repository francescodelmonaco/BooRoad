// import { useParams } from "react-router-dom";
// import Accordion from "../components/Accordion";

// export default function ListCrd({ travelData }) {
//     const { id } = useParams();
//     const travelFound = travelData.find((travel) => travel.id == id);

//     if (!travelFound) {
//         return <h1>Viaggio non trovato</h1>;
//     }

//     if (!travelFound.viaggiatori || travelFound.viaggiatori.length === 0) {
//         return <h1>Nessun viaggiatore per questo viaggio</h1>;
//     }

//     return (
//         <div className="container">
//             {travelFound.viaggiatori.map((v) => (
//                 <Accordion key={v.id} v={v} /> // Usa v.id come key
//             ))}
//         </div>
//     );
// }