import '../styleSheet/DigimonDetail.css'
import useDigimonDetail from './useDigimonDetail.jsx';
import { useParams } from 'react-router';

const Digimon = ({digimon}) => {
  return(
    <>
      <h2 className='digimonDetalle__title'>Detalle del Digimon</h2>
      <div className='digimonDetalle__contenedor'>
        <div className='digimonDetalle__contenedor__left'>
          <label className='digimonDetalle__contenedor__leftt__name'> Nombre: {digimon.name} </label> 
          <p className='digimonDetalle__contenedor__leftt__level'> Level: {digimon.level}</p>
        </div>
        <div className='digimonDetalle__contenedor__right'>
          <img src={digimon.img} 
            alt={`Imagen del digimon ${digimon.name}`} 
            className='digimonDetalle__contenedor__right__img'/>
        </div>
      </div>
    </>
  )
}

const Loading = () => <p className='digimonDetalle__title'>Cargando . . .</p>;

const Error = ({name}) => {
  return <p className='digimonDetalle__title'> NO SE PUEDO ENCONTRAR EL DIGINON {name} </p>
}

function DigimonDetail(){

  const {name} = useParams();
  
  const {detail: digimon ,loading,error} = useDigimonDetail({name});


  if (error) return <Error />; 
  if (loading) return <Loading />

  return(
  <div>

    {!loading && <Digimon digimon={digimon}/>}
    {/* {loading && <Loading />}
    {error && <Error />} */}
  </div>
  );
}
export default DigimonDetail;

