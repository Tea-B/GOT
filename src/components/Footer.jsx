import React from 'react'
import { NavLink } from 'react-router-dom'
import "./Footer.scss";

const Footer = () => {
  return (
    <footer className="abajo">
        <NavLink to="/characters" activeClassName="active"><h6>PERSONAJES</h6></NavLink> 
        <NavLink to="/houses" activeClassName="active"><h6>CASAS</h6></NavLink>
        <NavLink to="/chronology" activeClassName="active"><h6>CRONOLOGÍA</h6></NavLink>
    </footer>
  )
}

export default Footer
