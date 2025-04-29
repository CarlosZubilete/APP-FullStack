import {useState, useEffect} from 'react';
import instrumentService from '../services/instrumentService';

function useInstruments(){

  const [instruments,setInstruments] = useState([]);
  const [loading,setLoading] = useState(true);
  const [error,setError] = useState(false);

  useEffect(() => {
    instrumentService.find()
      .then((data)=>{
        setInstruments(data)
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