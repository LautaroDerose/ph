import React from 'react'
import avatar1 from '../assets/avatar1.jpg'
import avatar2 from '../assets/avatar2.jpg'
import aboutImage from '../assets/about-2.jpg'

const About = () => {

  const styles = {
    cardContainer: "lg:w-2/5 md:h-[20vh] py-4 px-2 flex flex-col md:flex-row items-center text-center md:text-start   ",
    avatarContainer:"md:w-1/5 w-2/6  flex flex-col justify-center items-center m-2 pl-2",
    titleCard:' flex flex-col md:flex-row lg:items-center'
  }

  const tab = '\u00A0'

  return (
    <div className=' flex flex-col justify-center items-center mt-12 '>      
    {/* <div className='h-[100vh] flex flex-col justify-center items-center mt-12 '>       */}
      <div className='h-[40%] w-screen flex mx-auto'>
        <img src={aboutImage} alt="" className='h-[100%] w-[100%] object-cover' />
      </div>
      <div className='flex flex-col lg:flex-row justify-center items-center px-6 lg:px-28 py-10 lg:min-w-[1280px]'>
        {/* <h1 className='font-bold text-3xl flex justify-center mt-6'>Sobre Nosotros</h1> */}
        <h2 className='lg:w-4/12 md:w-[70%] font-semibold text-xl md:text-[24px] flex '>Transformando vidas con nutrición y el entrenamiento, mejorando los habitos</h2>
        <p className='lg:w-8/12 flex justify-center text-justify text-xs md:text-lg md:mt-4 '>
          Este es un espacio creado y pensado en la salud, con el fin de que tus objetivos sean claros, posibles y sostenibles en el tiempo, a traves de una alimentacion saludable y actividad fisica. 
          Te proponemos buscar tu mejor version, combinando nutricion y entrenamiento.
          Nuestra meta es que le des a tu cuerpo lo que realmente necesita con un plan %100 personalizado, eligiendo vos tu objetivo
          </p>
      </div>  

      <div className="w-full  relative flex flex-col lg:flex-row p-4 justify-center gap-2">
        
        <div className={ `${styles.cardContainer} bg-[#00F59B] `}>
          <div className={`${styles.avatarContainer}`}>
            <img src={avatar1} alt="" className=' rounded-full ' />
          </div>
          <div className=' flex flex-col justify-center p-4 '>
            <div>
              <div className={`${styles.titleCard}`} >
                <h2 className='font-bold text-xl text-[#7014F2]'>Lucia Sanchez </h2>
                <span className='hidden md:block  text-[#7014F2]'> {tab}|{tab} </span>
                <span className='font-medium text-[#7014F2]'>Lic. en Nutricion - MP6519</span>
              </div>
              <h1 className=' font-semibold text-amd'>Formacion en Nutricion </h1>  
              <p className='font-regular text-xs'>Nutricion y suplementacion deportiva alimentacion basa en plantas para deportistas</p>
            </div>
          </div>
        </div>
        
        <div className={ `${styles.cardContainer} bg-[#00F59B] `}>
          <div className={`${styles.avatarContainer}`}>
            <img src={avatar2} alt="" className=' rounded-full ' />
          </div>
          <div className=' flex flex-col justify-center p-4 '>
            <div>
              <div className={`${styles.titleCard}`} >
                <h2 className='font-bold text-xl text-[#7014F2]'>Emanuel Estevez </h2>
                <span className='hidden md:block  text-[#7014F2]'> {tab}|{tab} </span>
                <span className='font-medium text-[#7014F2]'>Entrenador personal</span>
              </div>
              <h1 className=' font-semibold text-amd'>Formacion en entrenamiento</h1>  
              <p className='font-regular text-xs'>Hipertrofia - biomecanica aplicada al entrenamiento de fuerza - estetica y composicion corporal - entrenamiento funcional</p>
            </div>
          </div>
        </div>


        
      </div>
    </div>
  )
}

export default About
