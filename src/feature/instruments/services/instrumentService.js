import axios from "axios";


const instrumentService = {
  find: async () => {
    return axios.get('http://localhost:9000/instruments')
      .then((response) => {
        return response.data;
      })
      .catch(() => {
        // retornamos el error..
      })
    },
  findByID: async(id) => {
    return axios.get(`http://localhost:9000/instruments/${id}`)
      .then((response)=>{
        return (response.data)
      })
      .catch(() => {
        // retornamos el error..
      })
    },
  create: async (values) => {
    return axios.post('http://localhost:9000/instruments',JSON.stringify(values), {
      headers: {
        'Content-Type': 'application/json'
      }
    })
  },
  editByID: async (id,values) => {
    return axios.patch(`http://localhost:9000/instruments/${id.toString()}`,JSON.stringify(values),{
      headers: {
        'Content-Type': 'application/json'
      }
    })
  },

  deleteByID: async (id) => {
    return axios.delete(`http://localhost:9000/instruments/${id}`,{
      headers: {
        'Content-Type': 'application/json'
      }
    })
  }
 
}

export default instrumentService;