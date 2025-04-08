import UserCard from './UserCard.jsx';
import '../styleSheet/DigimpnList.css'

function DigimonList({listaObjetos,loading}){

  // Renderizamos el array de objetos 
  // const list = listaObjetos.map((digimon,key) => { 
  //   return(
  //     <li key={key}> 
  //       <UserCard user={{
  //         name: digimon.name , 
  //         avatar: digimon.img}}/>
  //     </li>
  //   )
  // })

  if (loading){
    return (
      <p>Cargando la lista ...</p>
    )
  } 

  if(listaObjetos.length === 0) {
    return (
      <p>No se encontraron elementos en la lista</p>
    )
  }
  return(
    <ul className='listaDigimon'>
      {/* {list} */}
      {
      listaObjetos.map((digimon,key) => 
        <li key={key}> 
          <UserCard user={{
            name: digimon.name, 
            avatar: digimon.img}}/>
        </li>)    
      }
    </ul>
  )
}

export default DigimonList;