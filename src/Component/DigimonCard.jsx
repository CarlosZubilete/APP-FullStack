import '../styleSheet/DidimonCard.css'
import { useNavigate } from 'react-router' 

// Renderizado por  Digimonlist.jsx
function DigimonCard({digimons}){

  const navigate = useNavigate()

  const handleSelected = () => {
    navigate(`/digimonsPage/${digimons.name}`)
  }

  return (
    <div  className='digimonCard'>
      <p className='digimonCard__name'>{digimons.name}</p>
      <img src={digimons.avatar} className={'digimonCard__avatar'} />
      <p onClick={handleSelected} className='digimonCard__info'>Info</p>
    </div>
  )
}

export default DigimonCard;