import axios from "axios";
import React, { useState, useEffect } from "react";
import "./Cronologia.scss";
import { Link } from "react-router-dom";
import imagen from '../../assets/i.png'
import image from '../../assets/2.png'
import SimpleBarReact from 'simplebar-react'
import 'simplebar-react/dist/simplebar.min.css';


export default function Cronologia() {
    const [personajes, setPersonajes] = useState([]);
    const [houses, setHouses] = useState([]);
    const [orden, setOrden] = useState(true);
    

    useEffect(()=> {
        const getHouse = async ()=> {
        const {data} = await axios.get(
          "https://api.got.show/api/show/houses" + houses
        );
          setHouses(data[0]);
          console.log(houses);
         };
         
         const getData = async () => {
            const { data } = await axios.get(`https://api.got.show/api/show/characters/` + personajes
            );
            console.log(data);
            setPersonajes(data);
            await getHouse(data.houses);
        };
        getData();
        
    }, []);

    useEffect(() => {
        if (orden) {
            ordenarMayorAMenor(personajes);
        } else {
            ordenarMenorAMayor(personajes);
        }
    }, [orden, personajes]);

    const handleChange = (event) => {
        const {value} = event.target;
        searchChar(value);
      }
      const searchChar = (name) => {
        let filtered = personajes.filter((char) => char.name.toLowerCase().includes(name.toLowerCase()));
        setPersonajes(filtered);}



    return (
        <>             
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
    
 <div className="all">

           <div className="Rectangle-4">
           <button className="Ellipse-1" type="button" onClick={cambioOrden}><img src={imagen} className= "flechas"/></button>

           <div className="Ellipse-2">    
           <img src={image} className={orden ? 'bb' : 'cc'}/>

           </div>
       </div>
       

       
   <div className="CRONOLOGIA">
   <SimpleBarReact className="raya">
             {personajes.map((item, index) => (
                <div key={index} className={index % 2 === 0 ? "izquierda" : "derecha"}>
                      <div className="card">
                            <p>{item.age?.age}</p>
                            <h5>{item.name}</h5>
                            <img  className="image-19" alt="" src={item.image} />
                      </div>
                </div> ))}</SimpleBarReact>
           </div>   
    </div>
</>
    );
    function cambioOrden() {
        setOrden(!orden);
    }
    function ordenarMayorAMenor(personajes) {
        if (personajes && personajes.length > 0) {
            personajes.sort((a, b) => b.age?.age - a.age?.age);
        }
        return personajes;
    }
    function ordenarMenorAMayor(personajes) {
        if (personajes && personajes.length > 0) {
            personajes.sort((a, b) => a.age?.age - b.age?.age);
        }
        return personajes;
    }
 
}

