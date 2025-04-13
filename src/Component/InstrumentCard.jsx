
// Renderizado por  Digimonlist.jsx
function InstrumentCard({instrument}){

  const handleSelected = () => {
    //navigate(`/digimonsPage/${digimons.name}`)
  }

  return (
    <div onClick={handleSelected} >
      <p>ID: {instrument.id}</p>
      <p>Name: {instrument.name}</p>
      <p>Price: {instrument.price}</p>
      <p>Description: {instrument.description}</p>
      <p>Type: {instrument.type}</p>
    </div>
  )
}

export default InstrumentCard;