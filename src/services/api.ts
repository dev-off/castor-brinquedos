import axios from 'axios';
let baseURL = 'http://localhost:3000/api/';
const api = axios.create({ baseURL });
export default api;

