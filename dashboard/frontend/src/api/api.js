import axios from 'axios';

const API = axios.create({
  baseURL: 'http://localhost:4000/api', // Change this to your backend port
});

export default API;
