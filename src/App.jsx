// import ButtonState , {Seleccionado, NoSeleccionado} from './Component/ButtonState.jsx'
//import digiList from './digimon.json';
import DigimonPage from './Component/DigimonPage';
import './App.css';

function App() {

  return (
    <div className='App'>
      {/* <ButtonState 
        seleccionado={<Seleccionado />}
        noSeleccionado={<NoSeleccionado />}
      /> */}
      {/* <DigimonList listaObjetos={digiList} /> */}
      <DigimonPage />
    </div>
  )
}

export default App
