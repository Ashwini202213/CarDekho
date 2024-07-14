import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import AllProducts from './API/AllProducts'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
     <h1>Welcome in CarDekho project</h1>
  <AllProducts/>
    </>
  )
}

export default App
