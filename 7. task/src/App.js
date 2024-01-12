import './App.css';
import ListaDeTareas from './components/ListaDeTareas';

function App() {
  return (
    <div className="App">
      <div className='div-title'>
        <p className='title-principal'>Aplicación de tareas</p>
      </div>

      <div className='lista-principal'>
        <p className='title-lista'>Mis Tareas:</p>
        <ListaDeTareas/>
      </div>
    </div>
  );
}

export default App;
