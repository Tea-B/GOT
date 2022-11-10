import axios from 'axios';
import React from 'react';
import '../personajes/Personajes.scss';
import { useEffect } from 'react';
import { useState } from 'react';
import { Link, Route, Routes, BrowserRouter as Router } from "react-router-dom";
import { Form } from './buscador'
import SimpleBar from 'simplebar-react';
import 'simplebar-react/dist/simplebar.min.css';



const Characters = () => {
  const [characters, setcharacters] = useState([]);

  useEffect(()=> {
    const getData = async ()=> {
    const {data} = await axios.get(
      "https://api.got.show/api/show/characters/"
    );
      setcharacters(data);
      console.log(data);
      characters.map((item, index) =>{
        if(item.image === "https://vignette.wikia.nocookie.net/gameofthrones/images/a/af/Mossador-s5e1-v2.jpg.jpg/revision/latest/scale-to-width-down/265?cb=20150427224509"){
          item.image = "https://assets.stickpng.com/images/5874ccfc42e4d628738559e0.png";
        }
        
        return characters;
        
      }
        
      )

    };


    getData();
  },[]);

  // const Characters = () => {
  //   const [characters, setcharacters] = useState([]);
  
  //   useEffect (() => {
  
  //     const getData = async ()=> {
  //       const { data } = await axios.get("https://api.got.show/api/show/characters/");
  
  //       console.log(data);
  //       let fixedChar = charactersFix(data);
  //       let mappedChar = charactersMap(fixedChar);
  //       setcharacters(mappedChar;
  //     };
  
  //     getData();
  
  //   }, []);

    let foundErrors = [
      "https://vignette.wikia.nocookie.net/gameofthrones/images/a/af/Mossador-s5e1-v2.jpg.jpg/revision/latest/scale-to-width-down/265?cb=20150427224509",
      "https://vignette.wikia.nocookie.net/gameofthrones/images/e/eb/S06E05_-_Kinvara_%281%29.jpg/revision/latest/scale-to-width-down/339?cb=20160812222946",
      "https://vignette.wikia.nocookie.net/gameofthrones/images/1/1b/Grenn.jpg/revision/latest?cb=20180702193920",
      "https://vignette.wikia.nocookie.net/gameofthrones/images/9/96/Oberyn-Martell-house-martell-37118334-2832-4256.jpg/revision/latest/scale-to-width-down/333?cb=20150815065729",
    ]
  
  return (
    <div className="page-container">
    <SimpleBar forceVisible="y" autoHide={false} className="scroll">
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
    </SimpleBar>    
    </div>
    

  )
}

export default Characters
