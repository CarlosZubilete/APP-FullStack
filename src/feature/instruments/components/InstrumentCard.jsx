import '../styles/InstrumentCard.css'

// Renderizado por  Digimonlist.jsx
function InstrumentCard({instrument}){

  const handleSelected = () => {
    //navigate(`/digimonsPage/${digimons.name}`)
  }

  return (
    <div onClick={handleSelected} 
      className='instrumentCard'>
      {/* <p className='instrumentCard__p'>ID: {instrument.id}</p> */}
      <p className='instrumentCard__p'><span className='instrumentCard__p--span'>Name: </span>{instrument.name}</p>
      <p className='instrumentCard__p'><span className='instrumentCard__p--span'>Price: </span>${instrument.price}</p>
      <p className='instrumentCard__p'><span className='instrumentCard__p--span'>Description: </span> {instrument.description}</p>
      <p className='instrumentCard__p'><span className='instrumentCard__p--span'>Type: </span>{instrument.type}</p>
    </div>
  )
}

export default InstrumentCard;