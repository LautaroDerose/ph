import React, { useState} from 'react'
import { Link } from 'react-router-dom';
import backImage from '../assets/back-hero.jpg'
import { BsArrowDownCircle, } from 'react-icons/bs'

const Hero = () => {

  
    const [isHovered, setIsHovered] = useState(false);

  const backgroundStyle = {
    backgroundImage: `url(${backImage})`,
    backgroundSize: 'cover',
    backgroundPosition: 'center',
    backgroundRepeat: 'no-repeat',
  };

  return (
    <div className='h-[90vh] w-screen flex flex-col mt-16 p-10 items-center justify-center ' style={backgroundStyle}>
      <div className='lg:w-[50%] md:w-[75%] mb-24 text-center '>
        <h1 className=''>Bienvenido a <p className='text-[#7014F2] px-3 text-3xl md:text-4xl font-black flex justify-center items-center '>Potenciando <span className='text-green-500 p-2'>Hábitos</span></p></h1>
        <p className='mt-2 mb-4 px-3 lg:text-2xl md:text-lg sm:text-xs '>Te acompañamos a descubrir cómo llevar un estilo de vida saludable a través de un proceso orientado a hacer posible tus objetivos.</p>
        <div className='flex gap-2 justify-center'>
          <Link to= "https://forms.gle/Me4Q4JiddPts4MLf7" target="_blank">
            <button className='bg-[#7014F2] px-4 py-2 rounded-full text-white font-bold' >Quiero empezar Ya!</button>
          </Link>
          <button className='border-[#7014F2] border-2 px-4 py-2 rounded-full text-[#7014F2] font-bold'><a href='/#realizarConsulta'>Realizar consulta</a></button>
        </div>
      </div>
      {/* <div className=' md:pt-0 mt-4 flex justify-center bg-green-300 rounded-full ' >
        <a className='btn-arrowDown flex items-center justify-center' >
          <BsArrowDownCircle className='icon text-purple-700 md:text-6xl text-3xl ' />
        </a>
      </div> */}

      {/* <div className='md:pt-0 mt-4 flex justify-center'>
      <div className='relative'>
        <div className='absolute flex items-center justify-center w-10 h-10 bg-green-300 rounded-full animate-ping '>
        </div>
        <div className='absolute flex items-center justify-center w-10 h-10 bg-green-300 rounded-full  z-10'>
          <div className=''>
            <BsArrowDownCircle className='icon text-purple-700 bg-green-300 rounded-full md:text-6xl text-3xl' />
          </div>
        </div>
      </div>
    </div> */}

    {/* <div className='md:pt-0 mt-4 flex justify-center'>
      <div className='relative'>
        <div className='absolute w-10 h-10 bg-green-300 rounded-full animate-ping opacity-50 scale-150'>
        </div>
        <div className='absolute w-10 h-10 bg-green-300 rounded-full animate-ping opacity-100 scale-250'>
        </div>
        <div className='absolute flex items-center justify-center w-10 h-10 bg-green-300 rounded-full  z-10'>
          <div className=''>
            <BsArrowDownCircle className='icon text-purple-700 bg-green-300 rounded-full md:text-6xl text-3xl' />
          </div>
        </div>
      </div>
    </div> */}

    </div> 
  );
};

export default Hero;

