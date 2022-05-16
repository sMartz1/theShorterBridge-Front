import axios from 'axios';

const createUrl = async body => axios.post(`http://localhost:3001/api/short`,body)

export default createUrl;