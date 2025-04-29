import { useEffect, useState } from 'react';
import {Link ,useParams, useNavigate} from 'react-router'; 
import InstrumentCard from './InstrumentCard';
import '../styles/DeleteInstrument.css'
import instrumentService from '../services/instrumentService';

function DeleteInstrument(){

  const {id} = useParams(); 
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


  if(error) return <p>Error.. </p>;
  
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

  return (
    <div className='deleteInstrument'>
      <h4 className='deleteInstrument__title'>Yoo'll deleted the next INSTRUMENT</h4>
      <InstrumentCard instrument={{
              name: instrumento.name,
              price: instrumento.price,
              description: instrumento.description,
              type: instrumento.type,
            }}/>
      <div className='deleteInstrumente__buttons'>
        <button type='button'
          className='deleteInstrument__buttonSend' 
          disabled={sending}
          onClick={handleSubmitForm}>
              {(sending)? 'Enviando...': 'Delete'}
        </button>
        <Link to='/instrumentsPage'>
          <button className='deleteInstrument__buttonBack' disabled={sending} >Back</button>
        </Link>
      </div>        
    </div>
  )
}

export default DeleteInstrument;