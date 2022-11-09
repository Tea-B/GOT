import axios from 'axios';
import React from 'react';
import '../personajes/Personajes.scss';
import { useEffect } from 'react';
import { useState } from 'react';
import { Link, Route, Routes, BrowserRouter as Router } from "react-router-dom";
import { Form } from './buscador'



const Characters = () => {
  const [characters, setcharacters] = useState([]);

  useEffect(()=> {
    const getData = async ()=> {
    const {data} = await axios.get(
      "https://api.got.show/api/show/characters/"
    );
      console.log(data);
      setcharacters(data)

    };


    getData();
  },[]);

  
  return (
    <div className="page-container">

    <div className="gallery-father">
      {characters.map((item, index) =>
      <div className="galley-element">
        <div className="img-container">
        <img src = {item.image} alt="imagen personaje" className="imagenes"/>
        <h5 className="name">{item.name}</h5>
        </div>
      </div>
      )}
    </div>
    <div className="footer">
    <Link to="/characters">
      <h6 className='links-footer'>PERSONAJES</h6>
    </Link>
    <Link to="/houses"><h6 className='links-footer'>CASAS</h6></Link>
    <Link to="/chronology"><h6 className='links-footer'>CRONOLOGÍA</h6></Link>
      
    </div>

    </div>
    

  )
}

export default Characters
