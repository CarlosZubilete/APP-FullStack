//import UserCard from './UserCard.jsx';
import '../styleSheet/DigimonList.css'
import DigimonCard from './DigimonCard.jsx'

function DigimonList({listaObjetos,loading}){

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
          <DigimonCard digimons={{
            name: digimon.name, 
            avatar: digimon.img,
            level: digimon.level}}/>
        </li>)    
      }
    </ul>
  )
}

export default DigimonList;