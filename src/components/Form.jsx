import React from 'react'
import contactImage from '../assets/contact.png'
const Form = () => {
  return (
    <div>
      <h1 className='flex items-center justify-center p-4 text-4xl font-bold text-purple-600'>Contactanos</h1>
      <div className='bg-green-300  h-full md:h-[40vh] p-4 mx-auto flex items-center justify-center '>
        <div className='w-[100vw] flex items-center justify-center gap-8 '>
          <form action="" className='lg:w-[60vw]'>
            <div className=' flex flex-col md:flex-row gap-6 '>
              <div className='md:w-[20vw] flex flex-col items-center gap-3'>
                <input type="text" placeholder='Nombre completo'
                className='w-full p-2 rounded-lg text-md text-slate-800 bg-green-200 outline-none hover:-translate-y-1 focus:shadow-md duration-300' />
                <input type="text" placeholder='Numero de Telefono' 
                className='w-full p-2 rounded-lg text-md text-slate-800 bg-green-200 outline-none hover:-translate-y-1 focus:shadow-md duration-300' />
                <input type="email" placeholder='Correo electronico' 
                className='w-full p-2 rounded-lg text-md text-slate-800 bg-green-200 outline-none hover:-translate-y-1 focus:shadow-md duration-300' />
              </div>
              <div>
                <textarea name="" id="" cols={30} rows={5} placeholder='Mensaje o consulta'
                  className='md:w-[40vw] w-full min-h-[100px] h-full p-2 rounded-lg text-md text-slate-800 bg-green-200 resize-none outline-none hover:-translate-y-1 focus:shadow-md duration-300'
                />
              </div>
            </div>
            <button className='bg-purple-400 hover:bg-purple-500 w-full py-4 px-4 mt-4 ' type='submit'>Enviar mensaje</button>     
          </form>
        </div>
      </div>
    </div>
  )
}

export default Form
