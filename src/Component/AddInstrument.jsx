import '../styleSheet/AddInstrument.css'

function AddInstrument(){

  const handleSubmitForm = (evento) => {
    evento.preventDefault();
  }

  return(
    <form onClick={handleSubmitForm}  className='AddInstrument' action=''>
      <label htmlFor='name' className='AddInstrument__label'>
        Name:
        <input type='text' className='AddInstrument__input' id='name' name='name'/>
      </label>
      <label htmlFor='price' className='AddInstrument__label'>
        Price:
        <input type='number' className='AddInstrument__input' id='price' name='price'/>
      </label>
      <label htmlFor='description' className='AddInstrument__label'>
        Description:
        <input type='text' className='AddInstrument__input' id='description' name='description'/>
      </label>
      <label htmlFor='type' className='AddInstrument__label'>
        Type:
        <input type='text' className='AddInstrument__input' id='type' name='type'/>
      </label>
      <button type='submit' className='AddInstrument__button'>Add Instument</button>
    </form>
  )
}

export default AddInstrument;