import React, { useContext, useEffect, useState } from 'react'
// import { useState } from 'react'
// import { useEffect } from "react";
// import axios from "axios";
import './Casas.scss'

import SimpleBar from 'simplebar-react';
import 'simplebar-react/dist/simplebar.min.css';
import { Link, NavLink } from 'react-router-dom';
import axios from 'axios';

const Casas = () => {

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

  let placeholderImage = "https://upload.wikimedia.org/wikipedia/commons/thumb/f/f6/Escudo_de_Espa%C3%B1a_%28her%C3%A1ldico%29.svg/1200px-Escudo_de_Espa%C3%B1a_%28her%C3%A1ldico%29.svg.png"

  const scroll = {
    width: "86vw",
    height: "70vh",
    margin: "0px 6vw 0px 8vw",
    // backgroundColor: "black"
  };

  const searchCasas = (name) => {
    const filtered = casas.filter((casa) => casa.name.toLowerCase().includes(name.toLowerCase()));
    setCasas(filtered);
  }

  const handleChange = (event) => {
    const {value} = event.target;
    searchCasas(value);
  }

  return (
    <div>
      <header>
        <div>
          <input type="text" placeholder='Buscar...' onChange={handleChange}/>
        </div>
        <div>
          <Link to="/">
            <img src="Group.svg" alt="house"></img>
          </Link>
          <button>
            <img src="spain 1.svg" alt="españa"></img>
          </button>
          <button>
          <img src="united-kingdom 1.svg" alt="uk"></img>
          </button>
        </div>
      </header>
      <SimpleBar style = {scroll}>
        <div className='galery'>
          {
            casas.map((casa) => {
              let { name, img, alt } = casa;
              return (
           
                  <div className='cardC'>
                    <NavLink to={`/houses/${name}`} state={{casa}}>     
                      <img src={img ? img : placeholderImage} alt={alt}/>
                      <p>{name}</p>
                    </NavLink>
                  </div>

              )
            })
          }
        </div>
      </SimpleBar>
    </div>
  )
}

export default Casas
