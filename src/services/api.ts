import axios from 'axios';

const api = axios.create({
  baseURL: 'https://virtual-cafe.herokuapp.com/',
});

export default api;
