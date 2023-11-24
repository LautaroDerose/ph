import React from 'react'
import { Link } from 'react-router-dom';
import backImage from '../assets/back-hero.jpg'

const Hero = () => {

  const backgroundStyle = {
    backgroundImage: `url(${backImage})`,
    backgroundSize: 'cover',
    backgroundPosition: 'center',
    backgroundRepeat: 'no-repeat',
  };

  return (
    <div className='h-[70vh] w-screen flex mt-16 p-10 items-center justify-center ' style={backgroundStyle}>
      <div className='lg:w-[50%] md:w-[75%] mb-24 text-center '>
        <h1 className=''>Bienvenido a <p className='text-[#7014F2] px-3 text-3xl md:text-4xl font-black flex justify-center items-center '>Potenciando <span className='text-green-500 p-2'>Habitos</span></p></h1>
        <p className='mt-2 mb-4 px-3 lg:text-2xl md:text-lg sm:text-xs '>Te acompañamos a descubrir cómo llevar un estilo de vida saludable a través de un proceso orientado a hacer posible tus objetivos.</p>
        <div className='flex gap-2 justify-center'>
          <Link to= "https://forms.gle/Me4Q4JiddPts4MLf7" target="_blank">
            <button className='bg-[#7014F2] px-4 py-2 rounded-full text-white font-bold' >Quiero empezar Ya!</button>
          </Link>
          <button className='border-[#7014F2] border-2 px-4 py-2 rounded-full text-[#7014F2] font-bold'><a href='/#realizarConsulta'>Realizar consulta</a></button>
        </div>
      </div>
    </div> 
  );
};

export default Hero;

