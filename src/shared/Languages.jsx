import React from 'react'
import { useTranslation } from "react-i18next";
// import en from '../../assets/img/en.png';
// import es from '../../assets/img/es.png';
import './Languages.scss';

function Languages() {

  const [t, i18n] = useTranslation('global');

  return (
    <div>
            <img src="spain 1.svg" alt="españa" onClick={() => i18n.changeLanguage('es')} ></img>

          <img src="united-kingdom 1.svg" alt="uk" onClick={() => i18n.changeLanguage('es')} ></img>

    </div>
    
  )
}

export default Languages