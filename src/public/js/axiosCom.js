import axios from 'axios'

var instance = axios.create({
    baseURL: 'http://localhost:3000/',
    timeout: 1000,
    headers: {'X-Custom-Header': 'foobar'}
  });

  export default {
      instance
  }