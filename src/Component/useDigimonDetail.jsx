import { useEffect, useState } from "react";
import axios from "axios";

function useDigimonDetail({name}){

  const[detail,setDetails] = useState([]);
  const[error,setError] = useState(false);
  const[loading,setLoading] = useState(true);


  useEffect(() => {
    axios
    .get(`https://digimon-api.vercel.app/api/digimon/name/${name}`)
      .then((response) => {
        setDetails(response.data[0])
        setLoading(false);
      })
      .catch(() => {
        setError(true)
      })
      .finally(()=>{
        setLoading(false);
      })
  }, [name])

  return {detail,loading,error}
}

export default useDigimonDetail;