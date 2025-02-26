import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [linea1, setLinea1] = useState("");
  const [linea2, setLinea2] = useState("");

  const escribirLinea1 = (e) => {
    setLinea1(e.target.value);
  }

  const escribirLinea2 = (e) => {
    setLinea2(e.target.value);
  }

  return (
    <>
      <select>
        <option value="fire">Casa en llamas</option>
        <option value="futurama">Futurama</option>
        <option value="history">History Channel</option>
        <option value="matrix">Matrix</option>
        <option value="philosoraptor">Philosoraptor</option>
        <option value="smart">Smart Guy</option>
      </select>
      <br />
      
      <input onChange={escribirLinea1} type="text" placeholder="Linea 1" /><br />
      <input onChange={escribirLinea2} type="text" placeholder="Linea 2" /><br />
      <button>Exportar</button>
      <div>
        <span>{linea1}</span><br />
        <span>{linea2}</span>
        <img src="" />
      </div>
    </>
  )
}

export default App
