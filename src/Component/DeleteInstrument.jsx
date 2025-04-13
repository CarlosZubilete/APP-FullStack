import { useState } from 'react';
//import '../styleSheet/EditInstrument.css'
import axios from 'axios';
import { useNavigate,Link } from 'react-router';


function DeleteInstrument(){

  const[id,setId] = useState('');

  const[error,setError] = useState(false);

  const navigate = useNavigate();
  
  const handleSubmitForm = (evento) => {
    // 1. Evitamos que se envie el formulario
    evento.preventDefault();
    //2. Creamos un objeto json 
    const body = Object({
      id,
    })

    //3. Enviamos la peticion POST
    axios.delete(`http://localhost:9000/api/instrumentos/${id.toString()}`,JSON.stringify(body),{
      headers: {
        'Content-Type': 'application/json'
      }
    })
      .then(()=>{
        navigate('/instrumentsPage')
      })
      .catch(()=>{
        setError(true)
      })
  }

  if(error) return <h1>Error. We  can't Delete instrument</h1>

  return(
    <div>
      <form onSubmit={handleSubmitForm}  className='AddInstrument' action=''>
        <label htmlFor='id' className='AddInstrument__label'>Id:
          <input type='number' className='AddInstrument__input' id='id' name='id'
          onChange={(e)=>setId(e.target.value)} value={id} />
        </label>
        <button type='submit' className='AddInstrument__button'>Delete Instument</button>
      </form>
      <div className='AddInstrument__contenedor__button'>
        <button> 
          <Link to='/instrumentsPage' className=''>Back</Link>
        </button>
      </div>
    </div>
  )
}

export default DeleteInstrument;