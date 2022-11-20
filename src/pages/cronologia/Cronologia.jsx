import axios from "axios";
import React, { useState, useEffect } from "react";
import "./Cronologia.scss";
import { NavLink , Link} from "react-router-dom"; 
import imagen from '../../assets/i.png'
import image from '../../assets/2.png'
import SimpleBarReact from 'simplebar-react'
import 'simplebar-react/dist/simplebar.min.css';



let casafixed;

export default function Cronologia() {
    const [personajes, setPersonajes] = useState([]);
    const [orden, setOrden] = useState(true);

  useEffect(()=> {

    const getData = async ()=> {
    const {data} = await axios.get(
        "https://api.got.show/api/show/characters/"
    );
      setPersonajes(data);
      console.log(data);       
      };

    getData();
  },[]);

    useEffect(() => {
        if (orden) {
            ordenarMayorAMenor(personajes);
        } else {
            ordenarMenorAMayor(personajes);
        }
    }, [orden, personajes]);

    



    return (
        <>             
      <header className="head">
        <div className='iconos'>
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
   <div className="rayota"></div>
             {personajes.map((item, index) => (
                    
                <div key={index} className={index % 2 === 0 ? "izquierda" : "derecha"}>
                      <div className="card">
                      <NavLink to={`/characters/${item.name}`} state={{item}}> 
                            <p>{item.age?.age}</p>
                            <h5>{item.name}</h5>
                            <img  className="image-19" alt="" src={item.image} />
                            </NavLink>
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

