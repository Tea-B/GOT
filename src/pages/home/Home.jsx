import React from 'react'
import "./Home.scss";
import { Link } from "react-router-dom";

const Home = () => {
      
 
  return (
    <div className="todo">

    <p>Games of Thrones</p>

         <div className="abajo">
              <Link to="/characters"><h6 className='links-footer'>PERSONAJES</h6> </Link> 
              <Link to="/houses"><h6 className='links-footer'>CASAS</h6></Link>
              <Link to="/chronology"><h6 className='links-footer'>CRONOLOGÍA</h6></Link>
          </div>
  
  </div>
  )
}

export default Home
