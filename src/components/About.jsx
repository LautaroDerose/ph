import React from 'react'
import avatar1b from '../assets/ph-avatar-002b.png'
import avatar2b from '../assets/ph-avatar-001b.png'
import aboutImage from '../assets/about-2.jpg'


const About = () => {
  
  const tab = '\u00A0'
  const styles = {
    avatarContainer:"w-[44vh] flex flex-col justify-center items-center  ",
    cardContainer: "lg:w-5/12 md:h-[40vh]  flex flex-col md:flex-row items-center text-center md:text-start   ",
    titleCard:' flex flex-col '
  }

  return (
    <div className=' flex flex-col justify-center items-center mt-12 '>      
      <div  className='h-[40%] w-screen flex mx-auto'>
        {/* <img src={aboutImage} alt="" className='h-[100%] w-[100%] object-cover' /> */}
        <img src="https://i.postimg.cc/GpSFYwvy/mujer-joven-top-rosa-pie-entrenador33.jpg" alt="" className='h-[100%] w-[100%] object-cover' />
      </div>

      <div id='nosotros' className='flex flex-col lg:flex-row justify-center items-center px-6 lg:px-28 py-10 lg:min-w-[1280px]'>
        <h2  className='lg:w-4/12 md:w-[70%] font-semibold text-xl md:text-[24px] flex '> Transformando hábitos con nutrición y entrenamiento, mejorándo tu estilo de vida</h2>
        <p className='lg:w-8/12  justify-center text-justify text-xs md:text-lg md:mt-4 '>
          Este es un espacio creado y pensado en la salud, con el fín de que tus objetivos sean claros, posibles y sostenibles en el tiempo, a través de una alimentación saludable y la actividad física. <strong>Te proponemos buscar tu mejor versión, combinando Nutrición y Entrenamiento</strong>. Nuestra meta es que le des a tu cuerpo lo que realmente necesita con un plan 100% personalizado, eligiendo vos tu objetivo.
        </p>
      </div>  

      <div className="w-full  relative flex flex-col lg:flex-row p-4 justify-center gap-8">
        
        <div className={ `${styles.cardContainer} bg-slate-200 border-2 border-[#00F59B] overflow-hidden `}>
          <div className={`${styles.avatarContainer} `}>
            <img src={avatar1b} alt="" className='w-full  ' />
          </div>
          <div className=' flex flex-col justify-center p-4 w-[60%] '>
            <div>
              <div className={`${styles.titleCard}`} >
                <h2 className='font-bold text-xl text-[#7014F2]'>Lucía Sánchez  </h2>
                <span className='font-medium text-[#7014F2]'>Licenciada en Nutrición - M.P.: 6519 </span>
                <span className='font-normal text-[#7014F2]'>Antropometrista Isak</span>
              </div>
              <h1 className=' font-semibold text-xs md:text-sm pt-2 '>Formación en Deporte </h1>  
              <p className='font-regular text-xs'>Nutrición Deportiva y Suplementación Alimentación basada en plantas en deportistas </p>
            </div>
          </div>
        </div>
        
        <div className={ `${styles.cardContainer} bg-slate-200 border-2 border-[#00F59B] overflow-hidden `}>
          <div className={`${styles.avatarContainer}`}>
            <img src={avatar2b} alt="" className='w-full ' />
          </div>
          <div className=' flex flex-col justify-center p-4 w-[60%] '>
            <div>
              <div className={`${styles.titleCard}`} >
                <h2 className='font-bold text-xl text-[#7014F2]'>Emanuel Estevez </h2>
                <span className='font-medium text-[#7014F2]'>Entrenador personal</span>
              </div>
              <h1 className=' font-semibold text-xs md:text-sm pt-2 '>Formación en Entrenamiento personalizado </h1>  
              <p className='font-regular text-xs'>Hipertrofia - Biomecánica aplicada al entrenamiento de Fuerza - Estética y Composición Corporal - Entrenamiento Funcional</p>
            </div>
          </div>
        </div>        
      </div>
    </div>
  )
}

export default About