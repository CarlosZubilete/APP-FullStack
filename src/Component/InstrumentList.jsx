import InstrumentCard from './InstrumentCard';
import '../styleSheet/InstrumentList.css'

function InstrumentList({listaInstrumentos}){

  /* 
    !NOTA : 
      Cuando renderizar con map(()={})
      sin las llaves, ya que devolvera underdined
  */
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