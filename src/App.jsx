import { useState } from 'react'
import './App.css'
import Navbar from './Components/Navbar'
import Banner from './Components/banner'
import Footer from './Components/Footer'


function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      
      <div>

        <Navbar />

      <Banner />

      <Footer />
        

      </div>

      
    </>
  )
}

export default App
