import axios from 'axios';
import { Indicator } from 'mint-ui';
axios.interceptors.request.use(function (config) {
    Indicator.open();
    return config;
  });
 
axios.interceptors.response.use(function (response) {
    Indicator.close();
    return response;
  });