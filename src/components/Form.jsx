import React, { useRef, useState } from 'react'
import emailjs from '@emailjs/browser';
import Swal from 'sweetalert2';
import contactImage from '../assets/contact.png'
const SuccesAlert = () => {

  Swal.fire({
    title: '<strong>Gracias!</strong>',
    icon: 'success',
    html:
      'Estamos en contacto,<br/> a la brevedad respondere su consulta. </br></br> ' +
      'Te invito a seguirme en ' +
      '<a href="https://instagram.com/nutricion_sanchezlucia?igshid=MmVlMjlkMTBhMg==" target="_blank" style="color:#019EDD; text-decoration: underline;">Instagram</a><br/> ',
    focusConfirm: false,
    confirmButtonText:
      '<i class="fa fa-thumbs-up"></i> Ok!',
    confirmButtonAriaLabel: 'Thumbs up, great!'
  })
}
const emailAlert = () => {

  Swal.fire({
    title: '<strong>Los emails no coinciden</strong>',
    icon: 'warning',
    html:
      'Por favor verifique los campos.',
    focusConfirm: false,
    confirmButtonText:
      '<i class="fa fa-thumbs-up"></i> Ok!',
    confirmButtonAriaLabel: 'Thumbs up, great!'
  })
}
const formAlert = () => {

  Swal.fire({
    title: '<strong>Error!</strong>',
    icon: 'error',
    html:
      'Por favor complete todos los campos </br> ',
    focusConfirm: false,
    confirmButtonText:
      '<i class="fa fa-thumbs-up"></i> Ok!',
    confirmButtonAriaLabel: 'Thumbs up, great!'
  })
}

function Form() {
  const form = useRef();
  const [emailMatch, setEmailMatch] = useState(true);
  const [isFormSubmitted, setIsFormSubmitted] = useState(false);

  const sendEmail = (e) => {
    e.preventDefault();

    const name = form.current.user_name.value;
    const email = form.current.user_email.value;
    const confirmEmail = form.current.confirm_email.value;
    const message = form.current.message.value;

    if (!name || !email || !confirmEmail || !message) {
      formAlert()
      return;
    }

    if (email !== confirmEmail) {
      emailAlert()
      setEmailMatch(false);
      return;
    }

    emailjs.sendForm('service_bqhwsye', 'template_wtjeung', form.current, 'ZS08K3NYr9mNqyCY9')
      .then(
        (result) => {
          SuccesAlert()
          form.current.reset();
          setEmailMatch(true);
          setIsFormSubmitted(true);
        }, (error) => {
          console.log(error.text);
      });
  };

  return (
    <div id="">
      <h1 className='flex items-center justify-center p-4 text-4xl font-bold text-purple-600'>Contactanos</h1>
      <div className='bg-green-300  h-full md:h-[40vh] p-4 mx-auto flex items-center justify-center '>
        <div className='w-[100vw] flex items-center justify-center gap-8 '>
          {/* <form action="" className='lg:w-[60vw]' ref={form} onSubmit={sendEmail} >
            <div className=' flex flex-col md:flex-row gap-6 '>
              
              <div className='md:w-[20vw] flex flex-col items-center gap-3'>
                <input 
                  id='name'
                  type="text" 
                  name="user_name" 
                  placeholder='Nombre completo'
                  className='w-full p-2 rounded-lg text-md text-slate-800 bg-green-200 outline-none hover:-translate-y-1 focus:shadow-md duration-300'  
                />
                <input 
                  id='phone'
                  type="text" 
                  name="user_phone" 
                  placeholder='Numero de Telefono' 
                  className='w-full p-2 rounded-lg text-md text-slate-800 bg-green-200 outline-none hover:-translate-y-1 focus:shadow-md duration-300' 
                />
                <input 
                  id='email'
                  type="email" 
                  name="user_email" 
                  placeholder='Correo electronico' 
                  className='w-full p-2 rounded-lg text-md text-slate-800 bg-green-200 outline-none hover:-translate-y-1 focus:shadow-md duration-300' 
                />
                <input 
                  id='confirm_email'
                  type="email" 
                  name="confirm_email" 
                  placeholder='Correo electronico' 
                  className='w-full p-2 rounded-lg text-md text-slate-800 bg-green-200 outline-none hover:-translate-y-1 focus:shadow-md duration-300' 
                  onChange={() => setEmailMatch(true)}
                />
              </div>
              
              <div>
                <textarea 
                  name="message" 
                  id="message" 
                  placeholder='Escriba su consulta aquí'
                  className='md:w-[40vw] w-full min-h-[100px] h-full p-2 rounded-lg text-md text-slate-800 bg-green-200 resize-none outline-none hover:-translate-y-1 focus:shadow-md duration-300'
                />
              </div>
            
            </div>
            <button className='bg-purple-400 hover:bg-purple-500 w-full py-4 px-4 mt-4 ' type="submit" value="Send">Enviar mensaje</button>     
          
          </form> */}
          <form
            className=' h-[20%] mx-auto my-auto md:p-0'
            ref={form}
            onSubmit={sendEmail}
          >
            <div className='flex w-full justify-center flex-wrap gap-4 '>
              <div className=' w-[100%] md:w-[45%]'>
                <input
                  className='w-full  my-1 p-2  rounded-lg text-md text-slate-800 bg-green-200 outline-none hover:-translate-y-1 focus:shadow-md duration-300'
                  id='name'
                  type='text'
                  name='user_name'
                  placeholder='Ingrese su nombre'
                />
                <input 
                  id='phone'
                  type="text" 
                  name="user_phone" 
                  placeholder='Numero de Telefono' 
                  className='w-full my-1 p-2  rounded-lg text-md text-slate-800 bg-green-200 outline-none hover:-translate-y-1 focus:shadow-md duration-300' 
                />
                <input
                  className='w-full my-1 p-2 rounded-lg text-md text-slate-800 bg-green-200 outline-none hover:-translate-y-1 focus:shadow-md duration-300'
                  id='email'
                  type='email'
                  name='user_email'
                  placeholder='Ingrese su email de contacto'
                />
                <input
                  className={`w-full my-1 p-2 rounded-lg text-md bg-green-200 outline-none hover:-translate-y-1 duration-300 ${emailMatch ? '' : 'border-red-500'
                    }`}
                  id='confirm_email'
                  type='email'
                  name='confirm_email'
                  placeholder='Confirme su email'
                  onChange={() => setEmailMatch(true)}
                />
              </div>
              <div className=' w-[100%] md:w-[45%] '>
                <textarea
                  className='w-full min-h-[100px] h-full p-2 rounded-lg text-md text-slate-800 bg-green-200 resize-none outline-none hover:-translate-y-1 focus:shadow-md duration-300'
                  id='message'
                  name='message'
                  placeholder='¿Cuál es su consulta?'
                />
              </div>
              <input
                className='bg-purple-400 hover:bg-purple-500 font-medium w-full md:w-[92%] text-center rounded-md py-3 hover:text-black  duration-300'
                type='submit'
                value='Enviar'
              />
            </div>
          </form>
        </div>
      </div>
    </div>
  )
}

export default Form
