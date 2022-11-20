import React from 'react'
import { Link, useLocation } from 'react-router-dom'
import Moment from 'react-moment';
import moment from 'moment/moment';
import './CasaDetail.scss'

const CasaDetail = () => {

  const location = useLocation();
  const { casa } = location.state
  console.log(casa);

  let placeholderImage = "https://upload.wikimedia.org/wikipedia/commons/thumb/f/f6/Escudo_de_Espa%C3%B1a_%28her%C3%A1ldico%29.svg/1200px-Escudo_de_Espa%C3%B1a_%28her%C3%A1ldico%29.svg.png"

  return (
    <div>
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
      <div className='casaD'>
        <div className='galeryD'>
          <img src={casa.img ? casa.img : placeholderImage} alt={casa.alt}/>
          <h1>{casa.name}</h1>
        </div>
        <div className='details'>
          <div className='details-ts'>
            <h3 className='details-title'>LEMA</h3>
            <h3 className='details-title'>SEDE</h3>
            <h3 className='details-title'>REGION</h3>
            <h3 className='details-title'>ALIANZAS</h3>
            <h3 className='details-title'>RELIGIONES</h3>
            <h3 className='details-title'>FUNDACION</h3>
          </div>
          <div className='details-cn'>
            <div className='details-data'><p>{casa.lema}</p></div>
            <div className='details-data'>
              {
                casa.sede.map((data) => {
                  return (
                    <p>{data}</p>
                  )
                })
              }
            </div>
            <div className='details-data'>
              {
                casa.region.map((data) => {
                  return (
                    <p>{data}</p>
                  )
                })
              }
            </div>
            <div className='details-data'>
              {
                casa.alianzas.map((data) => {
                  return (
                    <p>{data}</p>
                  )
                })
              }
            </div>
            <div className='details-data'>
              {
                casa.religion.map((data) => {
                  return (
                    <p>{data}</p>
                  )
                })
              }
            </div>
            <div className='details-data'><p>{moment(casa.creacion).calendar()}</p></div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default CasaDetail
