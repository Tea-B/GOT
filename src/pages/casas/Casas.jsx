import React, { useContext } from 'react'
// import { useState } from 'react'
// import { useEffect } from "react";
// import axios from "axios";
import './Casas.scss'

import SimpleBar from 'simplebar-react';
import 'simplebar-react/dist/simplebar.min.css';
import { Link, NavLink } from 'react-router-dom';
import { CasasContext } from '../../App';

const Casas = () => {

  const { casas, setCasas } = useContext(CasasContext);

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
        <nav>
          <div>
            <input type="text" placeholder='Buscar...' onChange={handleChange}/>
          </div>
          <div>

          </div>
        </nav>
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
