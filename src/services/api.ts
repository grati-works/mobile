import axios from 'axios';

const api = axios.create({
  baseURL: 'http://10.107.144.3:3333'
});

export { api };
