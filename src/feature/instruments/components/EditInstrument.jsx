import { useState } from 'react';
//import '../styleSheet/EditInstrument.css'
import axios from 'axios';
import { useNavigate,Link } from 'react-router';


function EditInstrument(){

  const[id,setId] = useState('');
  const[name,setName] = useState('');
  const[price,setPrice] = useState('');
  const[description,setDescription] = useState('');
  const[type,setType] = useState('');


  const[error,setError] = useState(false);

  const navigate = useNavigate();
  

  const handleSubmitForm = (evento) => {
    // 1. Evitamos que se envie el formulario
    evento.preventDefault();
    //2. Creamos un objeto json 
    const body = Object({
      id,
      name,
      price,
      description,
      type
    })

    //3. Enviamos la peticion POST
    axios.patch(`http://localhost:9000/api/instrumentos/${id.toString()}`,JSON.stringify(body),{
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

  if(error) return <h1>Error. We  can't Edit instrument</h1>

  return(
    <div>
      <form onSubmit={handleSubmitForm}  className='AddInstrument' action=''>
        <label htmlFor='id' className='AddInstrument__label'>Id:
          <input type='number' className='AddInstrument__input' id='id' name='id'
          onChange={(e)=>setId(e.target.value)} value={id} />
        </label>
          <label htmlFor='name' className='AddInstrument__label'>Name:
          <input type='text' className='AddInstrument__input' id='name' name='name' 
          onChange={(e)=>setName(e.target.value)} value={name} />
        </label>
        <label htmlFor='price' className='AddInstrument__label'>Price:
          <input type='number' className='AddInstrument__input' id='price' name='price'
          onChange={(e)=>setPrice(e.target.value)} value={price}/>
        </label>
        <label htmlFor='description' className='AddInstrument__label'>Description:
          <input type='text' className='AddInstrument__input' id='description' name='description'
          onChange={(e)=>setDescription(e.target.value)} value={description}/>
        </label>
        <label htmlFor='type' className='AddInstrument__label'>Type:
          <input type='text' className='AddInstrument__input' id='type' name='type'
          onChange={(e)=>setType(e.target.value)} value={type} />
        </label>
        <button type='submit' className='AddInstrument__button'>Edit Instument</button>
      </form>
      <div className='AddInstrument__contenedor__button'>
        <button> 
          <Link to='/instrumentsPage' className=''>Back</Link>
        </button>
      </div>
    </div>
  )
}

export default EditInstrument;