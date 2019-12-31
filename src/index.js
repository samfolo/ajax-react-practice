import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';
import axios from 'axios'

axios.defaults.baseURL = 'https://jsonplaceholder.typicode.com';
axios.defaults.headers.common['Authorization'] = 'AUTH TOKEN';
axios.defaults.headers.post['Content-type'] = 'application/json';

axios.interceptors.request.use(request => {
  console.log(request) //make any edits you wish here, in the global-est scope;
  return request;
}, error => {
  return Promise.reject(error); //send this back to continue with the usual request;
});

axios.interceptors.response.use(response => { // same for responses:
  console.log(response)
  return response;
}, error => {
  return Promise.reject(error);
})

ReactDOM.render( <App />, document.getElementById( 'root' ) );
registerServiceWorker();
