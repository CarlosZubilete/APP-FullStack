import { useState } from "react";
import '../styleSheet/ButtosState.css'

// Mostrando componenetes segun la condicion: 
const Seleccionado = () => <p className="selecionado">Está Seleccionado</p>
const NoSeleccionado = () => <p className="noSeleccionado">No está Seleccionado</p>

function ButtonState({seleccionado, noSeleccionado}){
  const[isSelected, setSelected] = useState(false);

  const handelSelectPress = () => {
    setSelected(!isSelected)
  }
  return(
    <button onClick={handelSelectPress}>
      {isSelected && seleccionado} 
      {!isSelected && noSeleccionado}
    </button>
  )
}


export {
  Seleccionado,
  NoSeleccionado
}

export default ButtonState;