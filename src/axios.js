import axios from 'axios';

const instance = axios.create({
  baseURL: 'http://10.48.250.191:8080/api/v1'
});

instance.defaults.headers.common['Authorization'] = 'bearer ' + localStorage.getItem('access');


export default instance;