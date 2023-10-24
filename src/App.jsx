import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Hero from './components/Hero'
import Navbar from './components/Navbar'
import About from './components/About'
import Plans from './components/Plans'
import Plans2 from './components/Plans_02'
import Form from './components/Form'
import PreCompra from './components/PreCompra'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
        <Navbar  />
        <Hero />
        <Plans />
        {/* <Plans2 /> */}
        <About />
        <Form />
        {/* <PreCompra /> */}
    </>
  )
}

export default App
