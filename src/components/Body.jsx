import React from 'react'
import About from './About';
import Hero from './Hero';
import Form from './Form';
import { Plans } from '.';


const Body = () => {
  
  return (
    <>
      <main>
        <div className="" >     
          <Hero />
        </div>
        <div id='planes' >
          <Plans/>
        </div>
        <div  >
          <About/>
        </div>        
        <div id='realizarConsulta' >
        <Form />
        </div>
      </main>
    </>
  )
}

export default Body
