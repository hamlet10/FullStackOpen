import axios from 'axios'
const baseUrl = 'http://localhost:3001/persons'

const getAll = () => {
    return axios.get(baseUrl)
  }
  
  const create = (newObject) => {
    const request = axios.post(baseUrl, newObject)
    return request.then(response => response.data)
  }
  
  const update = (id, newObject) => {
    return axios.put(`${baseUrl}/${id}`, newObject)
  }
  
  export default {
    getAll,
    create,
    update,
  }