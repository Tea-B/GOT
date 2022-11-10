import './App.css';
import { Link, Route, Routes, BrowserRouter as Router } from "react-router-dom";

import Home from './pages/home/Home';
import Personajes from './pages/personajes/Personajes';
import PersonajeDetail from './pages/personajes/personajeDetail/PersonajeDetail';
import Casas from './pages/casas/Casas';
import CasaDetail from './pages/casas/casaDetail/CasaDetail';
import Cronologia from './pages/cronologia/Cronologia';
import Header from './pages/personajes/buscador';


function App() {
  
  return (
    <Router>
      <main>
        <Routes>
          <Route exact path="/" element={<Home></Home>} />
          <Route path="/characters" element={<div><Header></Header><Personajes></Personajes></div>} />
            <Route
              path="/characters/:namePersonaje"
              element={<PersonajeDetail></PersonajeDetail>}
            />
          <Route path="/houses" element={<Casas></Casas>} />
            <Route
              path="/houses/:nameCasa"
              element={<CasaDetail></CasaDetail>}
            />
          <Route path="/chronology" element={<Cronologia></Cronologia>} />
        </Routes>
      </main>
      <footer>
      </footer>
    </Router>
  );
}

export default App;
