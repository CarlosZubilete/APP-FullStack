import instrumentService from '../services/instrumentService';
import { useNavigate } from 'react-router';
import { useEffect, useState } from 'react';

export default function useDeleteInstrument(id) {

  const [instrumento,setInstrumento] = useState({})
  const [error,setError] = useState(false)
  const [sending,setSending] = useState(false);

  const navigate = useNavigate();

  useEffect(()=>{
    instrumentService.findByID(id)
    .then((data)=>{
      setInstrumento(data)
    })
    .catch(()=>{
      setError(true)
    })
  }, [])

  const handleSubmitForm = (evento) => {
    
    evento.preventDefault();

    setSending(true);

    setTimeout(() => {
      instrumentService.deleteByID(id)
      .then(()=>{
        navigate('/instrumentsPage')
      })
    }, 2500)
  }

  return{instrumento,error,sending,handleSubmitForm}

}