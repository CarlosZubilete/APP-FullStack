import InstrumentList from './InstrumentList.jsx';
import axios from "axios";
import { useEffect, useState } from "react";
import '../styleSheet/InstrumentePage.css';
// http://localhost:9000/api/instrumentos
function InstrumentPage(){

  const [instruments, setInstruments] = useState([]);
  const [error,setError] = useState(false);
  const [loading,setLoading] = useState(true);

  useEffect(() => {
    axios.get('http://localhost:9000/api/instrumentos')
      .then((response) => {
        setInstruments(response.data);
      })
      .catch(()=>{
        setError(true)
      })
      .finally(()=>{
        setLoading(false)
      })      
  },[])

  if(error) return <h1>Error</h1>
  if(loading) return <h1>Cargando...</h1>

  return(
    <div className='instrumentePage'>
      <h1 className='instrumentePage__title'>Instrument List</h1>
      <InstrumentList listaInstrumentos={instruments}/>
    </div>
  )
}

export default InstrumentPage;