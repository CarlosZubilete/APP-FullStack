import { useState } from "react";

function FilterText({onFilter}){
    // Creamos un estado para vincular el imput con el estado 
    const [filterTxt,setFilterTxt] = useState("");
    // evento , es informacion del evento.
    const handleSubmitForm = (evento) => {
      evento.preventDefault() // elimina el comportamiento por defecto 
      onFilter(filterTxt);
    }
    const handleFilterTxtChange = (evento) => {
      setFilterTxt(evento.target.value);
      
    }

  return(
    <div>
      <form onSubmit={handleSubmitForm}>
        <label>Buscar: </label>
        <input type="text" 
        onChange={handleFilterTxtChange}
        value={filterTxt}/>
        <button type='reset'>reset</button>
        <button type='submit'>Submit</button>
      </form>
      <p>Filtro: {filterTxt}</p>
    </div>
  )
}

export default FilterText;