import React from 'react'
import axios from 'axios';
import { useEffect } from 'react';
import { useState } from 'react';
import { Link } from 'react-router-dom';
import "./PersonajeDetail.scss";
const PersonajeDetail = () => {

  const [character, setcharacter] = useState([]);

  useEffect(()=> {
  const getData = async ()=> {
  const {data} = await axios.get(
    "https://api.got.show/api/show/characters/Eddard%20Stark"
  );
  setcharacter(data);
    return character;
  }
    getData();
  },[]);



  return (
    <div className='page-container'>
      <header>
        <div>
          Volver
        </div>
        <div>
          <Link to="/">
            <img src="../Group.svg" alt="house"></img>
          </Link>
          <button>
            <img src="../spain 1.svg" alt="españa"></img>
          </button>
          <button>
          <img src="../united-kingdom 1.svg" alt="uk"></img>
          </button>

        </div>
      </header>

      <div className="contenedor">
        <img src = {character.image} alt="imagen personaje" className="img-char"/>
        <h3 className='nombre'>{character.name}</h3>
        
      </div>
      <div className='caracteristicas'>
        <div>
          <h6>
            CASAS
          </h6>
        </div>
        <div>
        <h6>
            ALIANZAS
          </h6>
          <ul>
          {character.allegiances.map((item, index) =>
          <li>{item}</li>
        )}
          </ul>
        </div>
        <div>
        <h6>
            APARICIONES
          </h6>
          <ul>
          {/* {character.appearances.map((item, index) =>
          <li>{item}</li>
        )} */}
          </ul>
        </div>
        <div>
        <h6>
            PADRE
          </h6>
          {/* <ul>
          {character.father.map((item, index) =>
          <li>{item}</li>
        )}
          </ul> */}
        </div>
        <div>
        <h6>
            DESCENDIENTES
          </h6>
        </div>
        <div>
        <h6>
            TITULOS
          </h6>
        </div>
      </div>
    </div>
  )
}

export default PersonajeDetail;