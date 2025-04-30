import {Link ,useParams} from 'react-router'; 
import InstrumentCard from './InstrumentCard';
import '../styles/DeleteInstrument.css'
import  useDeleteInstrument  from '../hooks/useDeleteInstrument';

function DeleteInstrument(){

  const {id} = useParams(); 
  // const [element, setElement] = useState();

  // valor : alias
  const {instrumento, error, sending,handleSubmitForm } = useDeleteInstrument(id);
  
  // useEffect(()=>{
  //   setElement(instrumento)
  // }, [instrumento])
  
  if(error) return <p>Error.. </p>;
  if (!instrumento.name) return <p>Cargando...</p>;


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