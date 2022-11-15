import axios from 'axios';
import React from 'react';
import '../personajes/Personajes.scss';
import { useEffect } from 'react';
import { useState } from 'react';
import { Link, Route, Routes, BrowserRouter as Router } from "react-router-dom";
import { NavLink } from 'react-router-dom';
import SimpleBar from 'simplebar-react';
import 'simplebar-react/dist/simplebar.min.css';

let charactersDone = [];
let charactersSearched = [];


let placeholderImage = "https://i0.wp.com/eltallerdehector.com/wp-content/uploads/2022/06/50517-sponge-bob-42.png?resize=910%2C754&ssl=1"

// let charactersDone = [];

const Characters = () => {
  const [characters, setcharacters] = useState([]);
  // let [charactersDone, setcharactersDone] = useState([]);

  useEffect(()=> {
    const getData = async ()=> {
    const {data} = await axios.get("https://api.got.show/api/show/characters/");

      let fixedCharacters = CharactersFix(data);

      let mappedCharacters = CharactersMap(fixedCharacters);
      setcharacters(mappedCharacters);
      charactersDone = mappedCharacters;
      console.log(charactersDone);
      };

    getData();
  },[]);

  let errorCharacters = [
    "https://vignette.wikia.nocookie.net/gameofthrones/images/a/af/Mossador-s5e1-v2.jpg.jpg/revision/latest/scale-to-width-down/265?cb=20150427224509",
    "https://vignette.wikia.nocookie.net/gameofthrones/images/e/eb/S06E05_-_Kinvara_%281%29.jpg/revision/latest/scale-to-width-down/339?cb=20160812222946",
    "https://vignette.wikia.nocookie.net/gameofthrones/images/1/1b/Grenn.jpg/revision/latest?cb=20180702193920",
    "https://vignette.wikia.nocookie.net/gameofthrones/images/9/96/Oberyn-Martell-house-martell-37118334-2832-4256.jpg/revision/latest/scale-to-width-down/333?cb=20150815065729",
  ];

  let CharactersFix = (data) => {

    let fixedCharacters = [];

    data.map((char) => {
      if (errorCharacters.includes(char.image)) {
        fixedCharacters.push({...char, image: ""});
      } else if (char.hasOwnProperty("image")) {
        fixedCharacters.push(char);
      } else {
        fixedCharacters.push({...char, image: ""});
      }
    })

    return fixedCharacters;
  };

  let CharactersMap = (fixedCharacters) => {

    let mappedCharacters = [];

    fixedCharacters.map((char) => {
      let { "name": nombre, "image": foto} = char
      mappedCharacters.push({nombre,foto})
    })

    return mappedCharacters;
  };

  // const handleChange = (event) => {
  //   const {value} = event.target;
  //   searchChar(value);
  // }
  // const searchChar = (name) => {
  //   charactersSearched = charactersDone.filter((char) => char.name.toLowerCase().includes(name.toLowerCase()));
  //   }


  
  return (
    <div className="page-container">
      <header>
        <div>
          <input type="text" placeholder='Buscar...' /*onChange={handleChange}*//>
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
      
    <SimpleBar forceVisible="y" autoHide={false} className="scroll">
    <div className="gallery-father">
      {

      charactersDone.map((char) => 
      {
        return(
        <div className="galley-element">
        <NavLink to={`/characters/${char.nombre}`} state={{char}}>     
        <div className="img-container">
        
        <img src = {char.foto ? char.foto: placeholderImage} alt="imagen personaje" className="imagenes"/>
        <h5 className="name">{char.nombre}</h5>
        </div>
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

export default Characters
