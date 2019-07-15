import axios from 'axios';
import { Indicator } from 'mint-ui';
import store from '../store'
axios.interceptors.request.use(function (config) {
    var num = '';
    if(config.params){
        var str = JSON.stringify(config.params).split('pageIndex":');
        if(str[1]){
            num = str[1].split(",")[0];
        }
    }
    if(num > 1){
        Indicator.open();
    }else{
        store.state.isLoad = true;
    }
    return config;
  });
 
axios.interceptors.response.use(function (response) {
    Indicator.close();
    store.state.isLoad = false;
    return response;
  });

    
