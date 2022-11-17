import './App.css';
import { Link, Route, Routes, BrowserRouter as Router, NavLink } from "react-router-dom";
import { useLocation } from "react-router-dom";

import Home from './pages/home/Home';
import Personajes from './pages/personajes/Personajes';
import PersonajeDetail from './pages/personajes/personajeDetail/PersonajeDetail';
import Casas from './pages/casas/Casas';
import CasaDetail from './pages/casas/casaDetail/CasaDetail';
import Cronologia from './pages/cronologia/Cronologia';
import React from 'react';


function App() {
  
  return (
    <Router>
      <main>
        <Routes>
          <Route exact path="/" element={<Home></Home>} />
          <Route path="/characters" element={<div><Personajes></Personajes></div>} />
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
      <footer className="abajo">
        <NavLink to="/characters" activeClassName="active"><h6 className='links-footer'>PERSONAJES</h6></NavLink> 
        <NavLink to="/houses" activeClassName="active"><h6 className='links-footer'>CASAS</h6></NavLink>
        <NavLink to="/chronology" activeClassName="active"><h6 className='links-footer'>CRONOLOGÍA</h6></NavLink>
      </footer>
    </Router>
  );
}

export default App;
