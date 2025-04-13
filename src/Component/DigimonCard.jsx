import '../styleSheet/DidimonCard.css'
import { useNavigate } from 'react-router' 

// Renderizado por  Digimonlist.jsx
function DigimonCard({digimons}){

  const navigate = useNavigate()

  const handleSelected = () => {
    navigate(`/digimonsPage/${digimons.name}`)
  }

  return (
    <div onClick={handleSelected} className='digimonCard'>
      <p className='digimonCard__name'>{digimons.name}</p>
      <img src={digimons.avatar} className={'digimonCard__avatar'} />
    </div>
  )
}

export default DigimonCard;