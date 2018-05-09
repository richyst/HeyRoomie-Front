import axios from 'axios';

const instance = axios.create({
  baseURL: 'http://localhost:8080/'
});

// instance.defaults.headers.common['Authorization'] = localStorage.getItem('access');

// instance.interceptors.request...
axios.interceptors.request.use(request => {
  console.log(request);
  // Edit request config
  return request;
}, error => {
  console.log(error);
  return Promise.reject(error);
});


export default instance;