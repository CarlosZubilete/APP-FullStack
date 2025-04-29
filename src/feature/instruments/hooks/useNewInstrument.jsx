
import { useEffect, useState } from "react";
import instrumentService from '../services/instrumentService.js'

async function saveInstrumento(id,values){
  // dependiendo si hay un id agregamos el instrumento...
  if(id){
    return instrumentService.editByID(id,values)
  }
  else{
    return instrumentService.create(values)
  }
}

export default function useNewInstrumet(id){
  
  const[error, setError] = useState(false)
  const[success, setSuccess] = useState(false);
  const[instrument,setInstrument] = useState(null)

  const handleSubmitForm = (values,{setSubmitting}) => {
    console.log(values);

    setSubmitting(true);
    // 3. Enviamos la peticion POST
    saveInstrumento(id,values)
      .then(()=>{
        setTimeout(() => {
          setSuccess(true)
        }, 2500)
      })
      .catch(()=>{
        setError(true)
        setSubmitting(false);
      })
  }
  
  // Miramos el id, cada vez que enviamos un id , preguntamos si exite
  useEffect(()=>{
    if(id){
      instrumentService.findByID(id)  
        .then((data) => {
          setInstrument(data)
        })
        .catch(() => {
          // RETORNA un error
        })
    }
  }, [id])

  return {handleSubmitForm,error,success, instrument}
}