import React from 'react'
import "./Home.scss";
import { Link } from "react-router-dom";

const Home = () => {
      
 
  return (
    <>
<header  className="top">     
    <div className="idioma">
          <button>
              <img src="spain 1.svg" alt="españa"></img>
          </button>
          <button>
              <img src="united-kingdom 1.svg" alt="uk"></img>
          </button>
  </div>
      </header>

    <div className="tod">
         <p  className="title">Game of Thrones</p>
  </div>
  </>
  )
}

export default Home
