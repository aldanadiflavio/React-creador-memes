import { useState } from 'react';
import './App.css';
import html2canvas from 'html2canvas';

function App() {
  const [linea1, setLinea1] = useState("");
  const [linea2, setLinea2] = useState("");
  const [imagen, setImagen] = useState("fire");

  const escribirLinea1 = (e) => {
    setLinea1(e.target.value);
  }

  const escribirLinea2 = (e) => {
    setLinea2(e.target.value);
  }
  
  const seleccionarImagen = (e) => {
    setImagen(e.target.value);
  }

  const exportarMeme = () => {
    const memeElement = document.querySelector(".meme");
    html2canvas(memeElement, { width: memeElement.clientWidth, height: memeElement.clientHeight }).then(canvas => {
      const img = canvas.toDataURL("image/png");
      const link = document.createElement("a");
      link.href = img;
      link.download = imagen + ".png";
      link.click();
    });
  }

  return (
    <>
      <form>
        <select onChange={seleccionarImagen} value={imagen}>
          <option value="fire">Casa en llamas</option>
          <option value="futurama">Futurama</option>
          <option value="history">History Channel</option>
          <option value="matrix">Matrix</option>
          <option value="philosoraptor">Philosoraptor</option>
          <option value="smart">Smart Guy</option>
        </select>
        <input onChange={escribirLinea1} type="text" placeholder="Linea 1" />
        <input onChange={escribirLinea2} type="text" placeholder="Linea 2" />
        <button type="button" onClick={exportarMeme}>Exportar</button>
      </form>
      <div className="meme">
        <img src={"/img/" + imagen + ".jpg"} alt="meme" />
        <div className="text-container">
          <span className="text top">{linea1}</span>
          <span className="text bottom">{linea2}</span>
        </div>
      </div>
    </>
  );
}

export default App;