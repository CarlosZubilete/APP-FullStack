import { useEffect,useState } from "react";
import axios from "axios";

// https://digimon-api.vercel.app/api/digimon

function useDigimons(){

  const [digimones, setDigimones] = useState([]);
  const [loading,setLoading] = useState(true);
  
  // Hacemos la petición
  useEffect(() => {
    axios.get('https://digimon-api.vercel.app/api/digimon')
      .then((response) => {
        setDigimones(response.data);
        // setDigimones([]);
        setLoading(false);
      })
    },[])
    

  // retornamos la lista.
  return {digimones,loading}
}

export default useDigimons;