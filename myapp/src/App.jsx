import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Login from './components/Login'
import Signup from './components/Signup'
import Navbar from './components/Navabar'
import { Routes , Route } from 'react-router-dom'
import Statebasic from './components/Statebasic'
import Sample from './components/Sample'
import Api from './components/Api'
import Pokimon from './components/Pokimon'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
           <Navbar/>
           <Routes>
            <Route path='/login' element={<Login/>} />
            <Route path='/signup' element={<Signup/>} />
            <Route path='/state' element={<Statebasic/>} />
            <Route path='/sa' element={<Sample/>} />
            <Route path='/api' element={<Api/>} />
            <Route path='/card' element={<Pokimon/>} />
           </Routes>
    </>
  )
}

export default App
