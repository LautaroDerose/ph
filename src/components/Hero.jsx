import React from 'react';
import { Link } from 'react-router-dom';
import backImage from '../assets/back-footer-min.jpg'; // Asegúrate de tener una imagen vertical aquí
import backImage2 from '../assets/back-hero-nov-2.png'; // Asegúrate de tener una imagen vertical aquí
import logo from '../assets/logo-3.png'; 
import { FaCalendarAlt, FaDumbbell, FaShoppingCart, FaUtensils, FaFileAlt, FaWhatsapp } from 'react-icons/fa';

export default function Component() {
  return (
    <div className="min-h-screen flex flex-col lg:flex-row ">
      {/* Sección de la imagen */}
      <div className="lg:w-1/2 h-[60vh] lg:h-screen pt-16 flex justify-center   bg-[length:160%_auto]  md:bg-[length:100%_auto] bg-[position:50%_50%] md:bg-[position:50%_60%] lg:bg-cover lg:bg-center  "   style={{ backgroundImage: `url(${backImage})` }}>
        <div className="h-full w-full bg-purple-900 bg-opacity-30 flex flex-col items-center justify-center  ">
          <div className='flex flex-col items-center justify-center'>
            <img
              src={logo}
              alt="logo"
              className="h-fit w-[20%] md:w-[15%] lg:h-[20%] lg:w-fit"
            />
            <div className='flex flex-col '>
              <h1 className="text-2xl md:text-3xl lg:text-4xl font-extrabold text-white text-center px-4"> RETO 28 días</h1>
              <span className=" text-xl md:text-2xl lg:text-3xl text-purple-300 font-bold text-center px-4">"Potenciar Hábitos"</span>
            </div>
            <div className=" mx-8 md:w-1/2 lg:w-fit flex flex-col md:flex-row  items-center text-center mt-6 bg-[#7014F2] text-white px-2 md:px-8 py-2 md:py-4 rounded-full font-bold text-lg transition-all duration-300 ease-in-out hover:bg-[#5010b0] hover:shadow-lg transform hover:-translate-y-1">
              <div className='hidden md:flex items-center justify-center '>
                <FaWhatsapp className='mx-auto my-auto text-white md:text-4xl lg:text-2xl mr-4'  />
              </div>
              <a
                href='https://api.whatsapp.com/send/?phone=5492936403573'
                className="inline-block "
              >
                ¡Escribinos por Whatsapp y Transforma tus hábitos!
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* Sección del contenido */}
      <div className="lg:w-1/2 bg-white p-6 lg:p-12 overflow-y-auto flex items-center justify-center lg:bg-transparent   bg-center bg-cover"  style={{ backgroundImage: `url(${backImage2})` }}>
        <div className="max-w-lg mx-auto mt-10">
          <p className="text-lg lg:text-xl text-gray-700 mb-8">
            ¡Transforma tu estilo de vida en solo <span className='font-bold text-green-500'>28 días</span>! Únete a nuestro plan estratégico para desarrollar hábitos saludables y mejorar tu bienestar físico y mental.
          </p>
          {/* <p className="text-lg lg:text-xl text-gray-700 mb-8">
            ¡Transforma tu vida en solo 28 días! Únete a nuestro plan estratégico para desarrollar hábitos saludables y mejorar tu bienestar físico y mental.
          </p> */}

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-8">
            {[
              { icon: FaCalendarAlt, text: "Plan Nutricional" },
              { icon: FaFileAlt, text: "Guía para el Cambio de Hábitos" },
              { icon: FaUtensils, text: "Menú 28 Días" },
              { icon: FaShoppingCart, text: "Lista de Compras" },
              { icon: FaDumbbell, text: "Plan de Entrenamiento" },
              { icon: FaWhatsapp, text: "Contacto directo vía WhatsApp" },
            ].map((item, index) => (
              <div key={index} className="flex items-center space-x-3 bg-purple-100 p-3 rounded-lg">
                <item.icon className="text-[#7014F2] text-xl flex-shrink-0" />
                <span className="text-sm lg:text-base text-gray-800">{item.text}</span>
              </div>
            ))}
          </div>

          <div className="max-w-lg mx-auto">
            <p className="text-[14px]  text-gray-700 mb-8">
            Durante el reto, lograrás generar cambios en cuanto a tu Alimentación y Entrenamiento, que desplazarán conductas antiguas para adoptar aquellas que potencien y creen hábitos positivos en tu vida.
            Al finalizar estos 28 días, lograrás haber conectado con tus necesidades, notando cambios significativos en tu bienestar y energía, tu estado de ánimo y descanso, como también en tu composición corporal y rendimiento diario.
            <br/><br/> <span className='font-semibold  '>Si aún no lograste generar un estilo de vida saludable este Reto es para vos🫵🏻</span>
            </p>
          </div>

          <div className="text-center mb-8">
            <p className="text-2xl font-bold text-green-400 mb-2">
            {/* <p className="text-2xl font-bold text-[#7014F2] mb-2"> */}
              Valor Lanzamiento: <span className="text-3xl">$25.000</span>
            </p>
            {/* <p className="text-gray-600">
              Hasta el 30/11 - <span className="line-through">Precio Regular: $32.000</span>
            </p> */}
            <p className="text-gray-600">
              <span className="line-through">Precio Regular: $32.000</span>
            </p>
            <p className="text-sm text-green-600 font-semibold">¡Ahorra $7.000 inscribiéndote ahora!</p>
          </div>

          
        </div>
      </div>
    </div>
  );
}

// import React from 'react';
// import { Link } from 'react-router-dom';
// import backImage from '../assets/back-hero-01.jpg';
// import { FaCalendarAlt, FaDumbbell, FaShoppingCart, FaUtensils, FaFileAlt, FaWhatsapp } from 'react-icons/fa';

// export default function Component() {
//   const backgroundStyle = {
//     backgroundImage: `url(${backImage})`,
//     backgroundSize: 'cover',
//     backgroundPosition: 'center',
//     backgroundRepeat: 'no-repeat',
//   };

//   return (
//     <div className="min-h-screen w-full flex items-center justify-center p-4 md:p-8" style={backgroundStyle}>
//       <div className="w-full max-w-4xl bg-white bg-opacity-95 p-6 md:p-8 rounded-2xl shadow-2xl">
//         <div className="text-center mb-8">
//           <h1 className="text-4xl md:text-5xl font-extrabold text-[#7014F2] mb-4">
//             RETO 28 días
//             <span className="block text-3xl md:text-4xl text-green-500">"Potenciar Hábitos"</span>
//           </h1>
//           <p className="text-lg md:text-xl text-gray-700 max-w-2xl mx-auto">
//             ¡Transforma tu vida en solo 28 días! Únete a nuestro plan estratégico para desarrollar hábitos saludables y mejorar tu bienestar físico y mental.
//           </p>
//         </div>

//         <div className="grid grid-cols-2 md:grid-cols-3 gap-4 mb-8">
//           {[
//             { icon: FaCalendarAlt, text: "Plan Nutricional" },
//             { icon: FaFileAlt, text: "Guía para el Cambio de Hábitos" },
//             { icon: FaUtensils, text: "Menú 28 Días" },
//             { icon: FaShoppingCart, text: "Lista de Compras" },
//             { icon: FaDumbbell, text: "Plan de Entrenamiento" },
//             { icon: FaWhatsapp, text: "Contacto directo vía WhatsApp" },
//           ].map((item, index) => (
//             <div key={index} className="flex items-center space-x-2 bg-purple-100 p-3 rounded-lg">
//               <item.icon className="text-[#7014F2] text-xl" />
//               <span className="text-sm md:text-base text-gray-800">{item.text}</span>
//             </div>
//           ))}
//         </div>

//         <div className="text-center mb-8">
//           <p className="text-2xl font-bold text-[#7014F2] mb-2">
//             Valor Lanzamiento: <span className="text-3xl">$28.000</span>
//           </p>
//           <p className="text-gray-600">
//             Hasta el 10/11 - <span className="line-through">Precio Regular: $32.000</span>
//           </p>
//           <p className="text-sm text-green-600 font-semibold">¡Ahorra $4.000 inscribiéndote ahora!</p>
//         </div>

//         <div className="text-center">
//           <Link
//             to="/inscripcion"
//             className="inline-block bg-[#7014F2] text-white px-8 py-4 rounded-full font-bold text-lg transition-all duration-300 ease-in-out hover:bg-[#5010b0] hover:shadow-lg transform hover:-translate-y-1"
//           >
//             ¡Inscríbete Ahora y Transforma tu Vida!
//           </Link>
//         </div>
//       </div>
//     </div>
//   );
// }

// import React from 'react';
// import { Link } from 'react-router-dom';
// import backImage from '../assets/back-hero-01.jpg';

// const Hero = () => {
//   const backgroundStyle = {
//     backgroundImage: `url(${backImage})`,
//     backgroundSize: 'cover',
//     backgroundPosition: 'center',
//     backgroundRepeat: 'no-repeat',
//   };

//   return (
//     <div className='h-[90vh] w-screen flex flex-col items-center justify-center text-center mt-16 p-10' style={backgroundStyle}>
//       <div className='lg:w-[50%] md:w-[75%] bg-opacity-80 bg-white p-8 rounded-lg shadow-lg'>
//         <h1 className='text-4xl md:text-5xl font-bold text-[#7014F2]'>RETO 28 días "Potenciar Hábitos"</h1>
//         <p className='mt-4 text-lg md:text-xl text-gray-700'>
//           Si aún no lograste generar un cambio saludable en tu vida, ¡este reto es para vos! 
//           Únete a nuestro plan estratégico para desarrollar hábitos saludables en 28 días, 
//           mejorando tu bienestar físico y mental.
//         </p>
//         <div className='mt-6 text-left space-y-2'>
//           <p className='text-gray-800'>¿Qué incluye el RETO?</p>
//           <ul className='list-disc list-inside text-gray-600'>
//             <li>✅ Plan Nutricional</li>
//             <li>✅ Guía para el Cambio de Hábitos</li>
//             <li>✅ Menú 28 Días</li>
//             <li>✅ Lista de Compras</li>
//             <li>✅ Plan de Entrenamiento</li>
//             <li>✅ Contacto directo vía WhatsApp</li>
//           </ul>
//         </div>
//         <p className='mt-4 text-lg font-semibold text-[#7014F2]'>Valor Lanzamiento: $28000 hasta el 10/11</p>
//         <p className='text-gray-600 text-sm'>Precio Regular: $32000 (10% de descuento incluido)</p>
//         <Link to='/inscripcion' className='mt-8 inline-block bg-[#7014F2] text-white px-6 py-3 rounded-lg font-bold hover:bg-[#5010b0]'>
//           ¡Inscribite Ahora!
//         </Link>
//       </div>
//     </div>
//   );
// };

// export default Hero;

// // import { BsArrowDownCircle, } from 'react-icons/bs'
// import React, { useState} from 'react'
// import { Link } from 'react-router-dom';
// import backImage from '../assets/back-hero-01.jpg'

// const Hero = () => {  
  
//   const backgroundStyle = {
//     backgroundImage: `url(${backImage})`,
//     backgroundSize: 'cover',
//     backgroundPosition: 'center',
//     backgroundRepeat: 'no-repeat',
//   };
  
//   return (
//     <div className='h-[90vh] w-screen flex flex-col mt-16 p-10 items-center justify-center ' style={backgroundStyle}>
//       <div className='lg:w-[50%] md:w-[75%] mb-24 text-center '>
//         <h1 className=''>Bienvenido a <p className='text-[#7014F2] px-3 text-3xl md:text-4xl font-black flex justify-center items-center '>Potenciando <span className='text-green-500 p-2'>Hábitos</span></p></h1>
//         <p className='mt-2 mb-4 px-3 lg:text-2xl md:text-lg sm:text-xs '>Te acompañamos a descubrir cómo llevar un estilo de vida saludable a través de un proceso orientado a hacer posible tus objetivos.</p>
//         <div className='flex gap-2 justify-center'>
//           <Link to= "https://forms.gle/Me4Q4JiddPts4MLf7" target="_blank">
//             <button className='bg-[#7014F2] px-4 py-2 rounded-full text-white font-bold' >Quiero empezar Ya!</button>
//           </Link>
//           <button className='border-[#7014F2] border-2 px-4 py-2 rounded-full text-[#7014F2] font-bold'><a href='/#realizarConsulta'>Realizar consulta</a></button>
//         </div>
//       </div>

//     </div> 
//   );
// };

// export default Hero;

// const [isHovered, setIsHovered] = useState(false);

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
