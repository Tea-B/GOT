import React from 'react'
import { useLocation } from 'react-router-dom'

const CasaDetail = () => {

  const location = useLocation();
  const { casa } = location.state
  console.log(casa);

  return (
    <div>
      CasaDetail
    </div>
  )
}

export default CasaDetail
