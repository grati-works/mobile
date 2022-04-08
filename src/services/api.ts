import axios from 'axios';

const api = axios.create({
  baseURL: 'http://10.107.144.8:3333'
});

export { api };
