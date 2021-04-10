import axios from 'axios';

const api = axios.create({
  baseURL:
    process.env.REACT_APP_ENV === 'production'
      ? 'https://virtual-cafe.herokuapp.com/'
      : 'http://localhost:3333',
});

export default api;
