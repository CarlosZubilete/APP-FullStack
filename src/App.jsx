// import ButtonState , {Seleccionado, NoSeleccionado} from './Component/ButtonState.jsx'
//import digiList from './digimon.json';
// import DigimonPage from './Component/DigimonPage';
import { Outlet } from 'react-router';
import Head from './Component/Head.jsx';
import './App.css';

function App() {

  return (
    <div className='App'>
      <Head />
      <Outlet />
      <h6>AllRigth@Cz</h6>
    </div>
  )
}

export default App
