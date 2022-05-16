import axios from 'axios';

const getAllLinks = async uid => axios.get(`http://localhost:3001/api/all/${uid}`)

export default getAllLinks;