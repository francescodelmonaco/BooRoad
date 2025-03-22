import { BrowserRouter, Routes, Route } from "react-router-dom"
import DefaultLayout from "./layouts/DefaultLayout"
import HomePage from "./pages/HomePage"
import TravelPage from "./pages/TravelPage"
import travelData from "./data/arrayTravels"



function App() {

  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route Component={DefaultLayout}>
            <Route path="/" element={<HomePage travelData={travelData} />} />
            <Route path="/travels/:id" Component={TravelPage} />
          </Route>
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
