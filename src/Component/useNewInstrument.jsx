import axios from "axios";
import { useEffect, useState } from "react";
import * as Yup from 'yup';

async function saveInstrumento(id,values){
  // dependiendo si hay un id agregamos el instrumento...
  if(id){
    return axios.patch(`http://localhost:9000/instruments/${id.toString()}`,JSON.stringify(values),{
      headers: {
        'Content-Type': 'application/json'
      }
    })
  }
  else{
    return axios.post('http://localhost:9000/instruments',JSON.stringify(values), {
      headers: {
        'Content-Type': 'application/json'
      }
    })
  }
}


export default function useNewInstrumet(id){
  
  const[error, setError] = useState(false)
  const[success, setSuccess] = useState(false);
  const[instrument,setInstrument] = useState(null)

  // Create a validation schema 
  const InstrumentSchema = Yup.object({
    name: Yup.string().min(4,`The field Name is too short`).required(`The field Name can't be blank`),
    price: Yup.number().min(0,`The field Price needs to be postive`),
    description: Yup.string().min(9,`The field Name is too short`).required(`The field Name can't be blank`), 
    type: Yup.string().min(4,`The field Name is too short`).required(`The field Name can't be blank`), 
  })


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
      axios.get(`http://localhost:9000/instruments/${id}`)
      .then((response)=>{
        setInstrument(response.data)
      })
    }
  }, [id])


  return {handleSubmitForm,error,success,InstrumentSchema, instrument}
}