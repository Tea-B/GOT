import React from 'react'
import "./HeaderHome.scss";

const HeaderHome = () => {
  return (
    <>
        <div className="headd">
            <div className='idiomas'>
                <button>
                    <img src="spain 1.svg" alt="españa"></img>
                </button>
                <button>
                    <img src="united-kingdom 1.svg" alt="uk"></img>
                </button>
            </div>
        </div>
        <div className="todo">
            <p>Game of Thrones</p>
        </div>
    </>
  )
}

export default HeaderHome
