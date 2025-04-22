import axios from "axios";
import { useState } from "react";

export default function useNewInstrumet(){
  
  const[error, setError] = useState(false)
  const[success, setSuccess] = useState(false);


  const validateFormik = (values) => {
    const errors = {};
    // Field name:
    if (!values.name || values.name.trim() === '') 
      {errors.name = `The field Name can't be blank`;} 
    else if (values.name.trim().length <= 4) 
        {errors.name = `The field Name is too short`; }
    // Field price: 
    if(values.price <= 0) 
      {errors.price = `The field Price needs to be postive`;}
    // Field Description
    if(!values.description || values.description.trim() === '') 
      {errors.description = `The field Description can't be blank`;}
    else if(values.description.trim().length < 10) 
      {errors.description = `The field Description is too short`;}
    // Field type:
     if(!(values.type) || values.type.trim() === '') 
      {errors.type = `The field Type can't be blank`;}
     else if(values.type.trim().length < 4) 
      { errors.type = `The field Type is too short`;}

    return errors;
  }


  const handleSubmitForm = (values,{setSubmitting}) => {
    console.log(values);

    setSubmitting(true);
    // 3. Enviamos la peticion POST
    axios.post('http://localhost:9000/instruments',JSON.stringify(values), {
      headers: {
        'Content-Type': 'application/json'
      }
    })
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
  
  return {handleSubmitForm,error,success,validateFormik}
}