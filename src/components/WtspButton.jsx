import React from 'react'
import { FaWhatsapp } from "react-icons/fa6";

const WtspButton = () => {
  return (
    <div className='' >
      <a 
        href='https://api.whatsapp.com/send/?phone=5492936403573'
        className='btn-arrowDown '
      >
        <FaWhatsapp className='mx-auto my-auto text-white text-2xl  md:text-5xl z-50 '  />
      </a>
    </div>
  )
}

export default WtspButton