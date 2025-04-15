import InstrumentCard from './InstrumentCard';
import '../styleSheet/InstrumentList.css'

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
              id: instrumento.id, 
              name: instrumento.name,
              price: instrumento.price,
              description: instrumento.description,
              type: instrumento.type
            }}/>
          </li>
        )
      }  
    </ul>
  )

}

export default InstrumentList;