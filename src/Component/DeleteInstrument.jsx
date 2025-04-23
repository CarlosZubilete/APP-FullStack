import { useEffect, useState } from 'react';
//import '../styleSheet/EditInstrument.css'
import axios from 'axios';
import {Link ,useParams, useNavigate} from 'react-router'; 
import InstrumentCard from './InstrumentCard';


function DeleteInstrument(){

  const {id} = useParams(); 
  const [instrumento,setInstrumento] = useState({})
  const [error,setError] = useState(false)


  const navigate = useNavigate();

  useEffect(()=>{
    axios.get(`http://localhost:9000/instruments/${id}`)
    .then((response)=>{
      setInstrumento(response.data)
    })
    .catch(()=>{
      setError(true)
    })
  }, [])


  if(error) return <p>Error.. </p>;
  
  const handleSubmitForm = (evento) => {

    evento.preventDefault();
  
    axios.delete(`http://localhost:9000/instruments/${id}`,{
      headers: {
        'Content-Type': 'application/json'
      }
    })
      .then(()=>{
        navigate('/instrumentsPage')
      })

  }

  return (
    <div>
      <h4>Yoo'll deleted the next INSTRUMENT</h4>
      <InstrumentCard instrument={{
              // id: instrumento.id, 
              name: instrumento.name,
              price: instrumento.price,
              description: instrumento.description,
              type: instrumento.type,
            }}/>
      <button type='button' onClick={handleSubmitForm}>Delete</button>
      <Link to='/instrumentsPage' >
        <button>Back</button>
      </Link>
    </div>
  )
}

export default DeleteInstrument;