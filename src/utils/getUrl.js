import axios from 'axios';

const getUrl = async short => axios.get(`http://localhost:3001/api/short/${short}`)

export default getUrl;