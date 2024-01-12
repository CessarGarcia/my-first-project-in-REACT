import './App.css';
import Boton from './component/boton'
import Contador from './component/contador'
import logo from './image/logo mouse.png'
import { useState } from 'react';

function App() {

  const [numClics, setNumClics] = useState(0);

  const manejarClic = () =>{
    setNumClics(numClics+1);
  };

  const reiniciarContador = () => {
    setNumClics(0);
  };

  return (
    <div className="App">
      <div className="logo-contenedor">
        <img
          className='logo'
          src={logo}
          alt='Imagen del logo'
        />
      </div>

      <div className='contenedor-principal'>
        <Contador
          numClics = {numClics}
        />
        <Boton 
          texto = "Clic"
          isBtnClic = {true}
          manejarClic = {manejarClic}
        />
        <Boton 
          texto = "Reiniciar"
          isBtnClic = {false}
          manejarClic = {reiniciarContador}
        />
      </div>
    </div>
  );
}

export default App;
