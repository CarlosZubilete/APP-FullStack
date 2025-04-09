import { useEffect, useState } from 'react';
import DigimonList from './DigimonList';
import FilterText from './FilterText';
import useDigimons from './useDigimons';


function DigimonPage() {

  const [listaObjetos,setListaObjetos] = useState([])

  // Propiedad : alias
  const {digimones: listALL , loading} = useDigimons();
  
  useEffect(() => 
    setListaObjetos(listALL) 
    , [listALL] )

  const handlerFilter = (filterTxt) => {
    setListaObjetos(listALL.filter((digimon) => {
      return digimon.name.toUpperCase().includes(filterTxt.toUpperCase());
    }))
  }

  return(
    <div>
      <FilterText onFilter = {handlerFilter}/>
      {/* {!loading && <DigimonList listaObjetos = {listaObjetos}/>}
      {(loading) &&  <p>Cargando. . . .</p> } */}
      <DigimonList listaObjetos = {listaObjetos} loading={loading}/>
    </div>
  )

}

export default DigimonPage;