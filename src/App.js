import './App.css';
import { Link, Route, Routes, BrowserRouter as Router, NavLink } from "react-router-dom";
import { useLocation } from "react-router-dom";

import Home from './pages/home/Home';
import Personajes from './pages/personajes/Personajes';
import PersonajeDetail from './pages/personajes/personajeDetail/PersonajeDetail';
import Casas from './pages/casas/Casas';
import CasaDetail from './pages/casas/casaDetail/CasaDetail';
import Cronologia from './pages/cronologia/Cronologia';
import React, { useEffect, useState } from 'react';
import axios from 'axios';

export const CasasContext = React.createContext();

function App() {

  const [casas, setCasas] = useState([]);

  useEffect (() => {

    const getData = async ()=> {
      const { data } = await axios.get("https://api.got.show/api/show/houses");

      let fixedCasas = casasFix(data);

      let mappedCasas = casasMap(fixedCasas);

      console.log(mappedCasas);
      setCasas(mappedCasas);
    };

    getData();

  }, []);

  let foundErrors = [
    "https://vignette.wikia.nocookie.net/gameofthrones/images/0/00/House-Baratheon-Main-Shield.PNG/revision/latest/scale-to-width-down/350?cb=20170519002924",
    "https://vignette.wikia.nocookie.net/gameofthrones/images/e/e5/House-Blackfyre-Main-Shield.PNG/revision/latest/scale-to-width-down/350?cb=20170511001004",
    "https://vignette.wikia.nocookie.net/gameofthrones/images/d/dd/House-Bolton-Main-Shield.PNG/revision/latest/scale-to-width-down/350?cb=20161231131431",
    "https://vignette.wikia.nocookie.net/gameofthrones/images/a/a0/House-Caron-Main-Shield.PNG/revision/latest/scale-to-width-down/350?cb=20160312125050",
    "https://vignette.wikia.nocookie.net/gameofthrones/images/f/f3/House-Cerwyn-Main-Shield.PNG/revision/latest/scale-to-width-down/350?cb=20170520000237",
    "https://vignette.wikia.nocookie.net/gameofthrones/images/2/20/House-Cole-Shield.png/revision/latest/scale-to-width-down/350?cb=20180325180633",
    "https://vignette.wikia.nocookie.net/gameofthrones/images/5/5b/House-Durrandon-Shield.PNG/revision/latest/scale-to-width-down/350?cb=20181210004341",
    "https://vignette.wikia.nocookie.net/gameofthrones/images/4/4b/House-Hightower-Main-Shield.PNG/revision/latest/scale-to-width-down/350?cb=20161213161859",
    "https://vignette.wikia.nocookie.net/gameofthrones/images/8/8a/House-Lannister-Main-Shield.PNG/revision/latest/scale-to-width-down/350?cb=20170101095357",
    "https://vignette.wikia.nocookie.net/gameofthrones/images/8/8a/House-Lannister-Main-Shield.PNG/revision/latest/scale-to-width-down/350?cb=20170101095357",
    "https://vignette.wikia.nocookie.net/gameofthrones/images/8/8a/House-Stark-Main-Shield.PNG/revision/latest/scale-to-width-down/350?cb=20170101103142",
    "https://vignette.wikia.nocookie.net/gameofthrones/images/b/b6/House-Strong-Shield.PNG/revision/latest/scale-to-width-down/350?cb=20170523035431",
    "https://vignette.wikia.nocookie.net/gameofthrones/images/c/cf/House-Tyrell-Main-Shield.PNG/revision/latest/scale-to-width-down/350?cb=20170108163035",
    "https://vignette.wikia.nocookie.net/gameofthrones/images/7/76/House-Velaryon-Main-Shield.PNG/revision/latest/scale-to-width-down/350?cb=20161219204203"
  ]


  let casasFix = (data) => {

    let fixedCasas = [];

    data.map((casa) => {
      if (foundErrors.includes(casa.logoURL)) {
        fixedCasas.push({...casa, logoURL: ""});
      } else if (casa.hasOwnProperty("logoURL")) {
        fixedCasas.push(casa);
      } else {
        fixedCasas.push({...casa, logoURL: ""});
      }
    })

    return fixedCasas;
  };

  let casasMap = (fixedCasas) => {

    let mappedCasas = [];

    fixedCasas.map((casa) => {
      let { "allegiance": alianzas, "createdAt": creacion, "logoURL": img, name, region, religion, "seat": sede, "sigil": alt, "words": lema} = casa
      mappedCasas.push({name, img, alt, sede, region, religion, lema, alianzas, creacion})
    })

    return mappedCasas;
  };
  
  return (
    <Router>
      <CasasContext.Provider value={{casas, setCasas}}>
        <main>
          <Routes>
            <Route exact path="/" element={<Home></Home>}/>
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
        
      </CasasContext.Provider>
    </Router>
  );
}

export default App;
