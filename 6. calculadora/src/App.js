import './App.css';
import Boton from './components/Boton';
import Pantalla from './components/Pantalla';
import BtnClear from './components/BtnClear';
import { useState } from 'react';
import { evaluate } from 'mathjs';


function App() {

  const [input, setInput] = useState('');
  const [lastClickedIsOperator, setLastClickedIsOperator] = useState(false)

  const addInput = val => {
    if (val === '+' || val === '-' || val === '*' || val === '/'){
      setLastClickedIsOperator(true)
    }else{
      setLastClickedIsOperator(false)
    }
    setInput(input + val);
  };

  const calResultado = () => {
    if (input) {
      // Validar que el ultmo caracter no sea un operador
      if (lastClickedIsOperator){
        return alert('No se puede realizar una operacion incompleta');
      }
      setInput(evaluate(input))
    } else {
      alert("Por favor ingrese valores para realizar el calculo.");
    }
  };

  return (
    <div className="App">
      <div className='contenedor-title'>
        <p className='title'>Calculadora</p>
      </div>

      <div className='contenedor-calculadora'>
        <Pantalla input={input} />
        <div className='fila'>
          <Boton manejarClic={addInput}>7</Boton>
          <Boton manejarClic={addInput}>8</Boton>
          <Boton manejarClic={addInput}>9</Boton>
          <Boton manejarClic={addInput}>/</Boton>
        </div>
        <div className='fila'>
          <Boton manejarClic={addInput}>4</Boton>
          <Boton manejarClic={addInput}>5</Boton>
          <Boton manejarClic={addInput}>6</Boton>
          <Boton manejarClic={addInput}>*</Boton>
        </div>
        <div className='fila'>
          <Boton manejarClic={addInput}>1</Boton>
          <Boton manejarClic={addInput}>2</Boton>
          <Boton manejarClic={addInput}>3</Boton>
          <Boton manejarClic={addInput}>+</Boton>
        </div>
        <div className='fila'>
          <Boton manejarClic={calResultado}>=</Boton>
          <Boton manejarClic={addInput}>0</Boton>
          <Boton manejarClic={addInput}>.</Boton>
          <Boton manejarClic={addInput}>-</Boton>
        </div>
        <div className='fila'>
          <BtnClear manejarClear={() => setInput('')}> </BtnClear>
        </div>
      </div>
    </div>
  );
}

export default App;
