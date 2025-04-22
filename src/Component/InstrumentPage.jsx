import { useEffect, useState } from 'react';
import '../styleSheet/InstrumentePage.css';
import NavBarInstruments from './NavBarInstruments.jsx';
import useInstruments from './useInstruments.jsx';
import InstrumentList from './InstrumentList.jsx';

// http://localhost:9000/api/instrumentos
function InstrumentPage(){

  const[listAll, setListaALL] = useState([]);
  // valor : alias
  const {instruments: instrumentos, loading, error} = useInstruments();

  
  // PORQUE ? 
  /* 
    instruments = instrumentos. 
    listaInstrumentos = instruments.
    underdine -> no exite 
    null -> exite pero no tiene valor.
  */

  useEffect(()=>{
    setListaALL(instrumentos)
  },[instrumentos])

  if(error) return <h1>Error</h1>
  if(loading) return <h1>Cargando...</h1>


  
  return(
    <div className='instrumentePage'>
      <h1 className='instrumentePage__title'>Instrument List</h1>
      <NavBarInstruments />
      <InstrumentList listaInstrumentos={listAll}/>
    </div>
  )
}

export default InstrumentPage;