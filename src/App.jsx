import { useState } from 'react'
import './App.css'
import Navbar from './Components/Navbar'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      
      <div>

        <Navbar />

        <h2>Hello</h2>

      </div>

      
    </>
  )
}

export default App
