import axios from 'axios';
import {useState, useEffect} from 'react';

function useInstruments(){

  const [instruments,setInstruments] = useState([]);
  const [loading,setLoading] = useState(true);
  const [error,setError] = useState(false);

  useEffect(() => {
    axios.get('http://localhost:9000/instruments')
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

  return{instruments,loading,error}
}

export default useInstruments;