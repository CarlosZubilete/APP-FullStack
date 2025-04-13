import InstrumentCard from './InstrumentCard';

function InstrumentList({listaInstrumentos}){

  /* 
    !NOTA : 
      Cuando renderizar con map(()={})
      sin las llaves, ya que devolvera underdined
  */
  return (
    <ul>
      {
        listaInstrumentos.map((instrumento) => 
          <li key={instrumento.id}>
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