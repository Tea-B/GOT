import React from 'react'
import axios from 'axios';
import { useEffect } from 'react';
import { useState } from 'react';
import { Link } from 'react-router-dom';
import "./PersonajeDetail.scss";
import { useLocation } from 'react-router-dom';
import SimpleBar from 'simplebar-react';

let casafixed;



const PersonajeDetail = () => {


  const [character, setcharacter] = useState([]);
  const [casa, setcasa] = useState([]);

  const location = useLocation();
  let char = location.pathname;
  

  let casaErrors=[
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

  let placeholderImage = "https://upload.wikimedia.org/wikipedia/commons/thumb/f/f6/Escudo_de_Espa%C3%B1a_%28her%C3%A1ldico%29.svg/1200px-Escudo_de_Espa%C3%B1a_%28her%C3%A1ldico%29.svg.png"


  useEffect(()=> {

    const getHouse = async (house)=> {
      const {data} = await axios.get(
        "https://api.got.show/api/show/houses/" + house
      );
        setcasa(data[0]);   
        if (casaErrors.includes(data[0].logoURL)){
          casafixed = placeholderImage;
          console.log("si tiene error")
          console.log(casafixed)
        } else{
          casafixed = data[0].logoURL;
          console.log("no tiene error")
          console.log(casafixed)
        }
        return casafixed;
        };


    const getData = async ()=> {
    const {data} = await axios.get(
      "https://api.got.show/api/show" + char
    );
      setcharacter(data);
      console.log(data);       
      await getHouse(data.house);
      };

    getData();
  },[]);

  // useEffect(()=> {
    
  //   getData();
  // },[]);


  return (
    <div className='page-full'>
      <header>
        <div>
        <Link to="/characters">
          Volver
        </Link>
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
        <div className='columna'>
          <h6>
            CASA
          </h6>
          <img src={casafixed ? casafixed : placeholderImage} alt="imagen-casa"/>
        </div>
        
        <div className='columna'>
        
        <h6>
            ALIANZAS
          </h6>
          <SimpleBar forceVisible="y" autoHide={false} className="small-scroll">
          <div class="lista">
          {character.allegiances?.map((item) =>
          <li>{item}</li> 
        )}
          </div>
          </SimpleBar>
        </div>
        <div className='columna'>
        <h6>
            APARICIONES
          </h6>
          <SimpleBar forceVisible="y" autoHide={false} className="small-scroll">
          <div class="lista">
          {character.appearances?.map((item, index) =>
          <li>{item}</li>
        )}
        </div>
        </SimpleBar>
        </div>
        <div className='columna'>
        <h6>
            PADRE
          </h6>
          <li>{character.father}</li>
        </div>
        <div className='columna'>
        <h6>
            DESCENDIENTES
          </h6>
          <SimpleBar forceVisible="y" autoHide={false} className="small-scroll">
          <div class="lista">
          {character.siblings?.map((item, index) =>
          <li>{item}</li>
        )}
        </div>
        </SimpleBar>
        </div>
        <div className='columna'>
        <h6>
            TITULOS
          </h6>
          <div class="lista">
          {character.titles?.map((item, index) =>
          <li>{item}</li>
        )}
        </div>
        </div>
      </div>
    </div>
  )
}

export default PersonajeDetail;