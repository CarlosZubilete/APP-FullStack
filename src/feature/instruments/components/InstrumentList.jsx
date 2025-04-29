import { Link } from 'react-router';
import '../styles/InstrumentList.css';
import InstrumentCard from './InstrumentCard';


function InstrumentList({listaInstrumentos}){

  /* 
    !NOTA : 
      Cuando renderizar con map(()={})
      sin las llaves, ya que devolvera underdined
  */
  // !TODO: no mostrar el id, agregar un filtro de busqueda + AddInstrument 
  // !TODO: Cuando entra el instrumento detalle. mostrar editar y eliminar. 
  return (
    <ul className='instumentList'>
      {
        listaInstrumentos.map((instrumento) => 
          <li className='instumentList__li' key={instrumento.id}>
            <InstrumentCard instrument={{
              // id: instrumento.id, 
              name: instrumento.name,
              price: instrumento.price,
              description: instrumento.description,
              type: instrumento.type,
            }}/>
          <div className='instumentList__link'>
            <Link to={`/instrumentsPage/${instrumento.id}/edit`}>
                <button>Edit</button>
            </Link>
            <Link to={`/instrumentsPage/${instrumento.id}/delete`}>
                <button>Delete</button>
            </Link>
          </div>
          </li>
        )
      }  
    </ul>
  )

}

export default InstrumentList;