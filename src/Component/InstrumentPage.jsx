import { useEffect, useState } from 'react';
import '../styleSheet/InstrumentePage.css';
import NavBarInstruments from './NavBarInstruments.jsx';
import useInstruments from './useInstruments.jsx';
import InstrumentList from './InstrumentList.jsx';

// http://localhost:9000/api/instrumentos
function InstrumentPage(){

  const[listAll, setListaALL] = useState([]);
  const {instruments: listaInstrumentos, loading, error} = useInstruments();

  
  // PORQUE ? 
  /* 
    instruments = instrumentos. 
    listaInstrumentos = instruments.
  */

  useEffect(()=>{
    setListaALL(listaInstrumentos)
  },[listaInstrumentos])

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