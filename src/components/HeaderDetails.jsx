import React from 'react'
import { Link } from 'react-router-dom'
import "./HeaderDetails.scss";

const HeaderDetails = () => {
  return (
    <header>
        <div className='return'>
            <Link to="/characters">
                Volver
            </Link>
        </div>
        <div className='iconosD'>
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
  )
}

export default HeaderDetails
