import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Corusel from './Component/Auto'
import Carousel from './Component/Carousel'
import Auto from './Component/Auto'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <div className='main'>
      <Carousel />
      <Auto />
      </div>
    </>
  )
}

export default App
