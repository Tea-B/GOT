import axios from "axios";
import React, { useState, useEffect } from "react";
import "./Cronologia.scss";
import { Link } from "react-router-dom";

export default function Cronologia() {
    const [personajes, setPersonajes] = useState([]);
    const [orden, setOrden] = useState(true);
   
    useEffect(() => {
        const getData = async () => {
            const { data } = await axios.get(`https://api.got.show/api/show/characters/`);
            console.log(data);
            setPersonajes(data);
            
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

    return (
<div className="all">
         <div className="head">
            <Link to="/"><h6 className='links-home'>HOME</h6></Link>
           </div>

      <div className="Rectangle-4">
           <button className="Ellipse-1" type="button" onClick={cambioOrden}> 0 </button>
       </div>

        <div className="CRONOLOGIA">
             {personajes.map((item, index) => (
                <div key={index} className={index % 2 === 0 ? "izquierda" : "derecha"}>
                      <div className="card">
                            <p>{item.age?.age}</p>
                            <h5>{item.name}</h5>
                            <img  className="image-19" alt="" src={item.image} />
                      </div>
                </div> ))}    
           </div>
</div>
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

