import '../styleSheet/InstrumentCard.css'


// Renderizado por  Digimonlist.jsx
function InstrumentCard({instrument}){

  const handleSelected = () => {
    //navigate(`/digimonsPage/${digimons.name}`)
  }

  return (
    <div onClick={handleSelected} 
      className='instrumentCard'>
      <p className='instrumentCard__p'>ID: {instrument.id}</p>
      <p className='instrumentCard__p'>Name: {instrument.name}</p>
      <p className='instrumentCard__p'>Price: {instrument.price}$</p>
      <p className='instrumentCard__p'>Description: {instrument.description}</p>
      <p className='instrumentCard__p'>Type: {instrument.type}</p>
    </div>
  )
}

export default InstrumentCard;