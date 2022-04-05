import axios from 'axios';

//https://www.youtube.com/watch?v=hgbHbbpph5c old video with errors 

//const axios = require('axios');

/*
axios.get('http://webcode.me').then(resp => {

    console.log(resp.data);
});

*/

const response = axios({
    method: 'post',
    url: 'http://localhost:3000',
    data: {number: 1}
  });
console.log(response.AxiosResponse);

/*
ERROR need to be fix: 
E:\Test001\src>npm run client

> test001@1.0.0 client
> node ./src/dist/client.js

undefined:1
undefined
^

SyntaxError: Unexpected token u in JSON at position 0
    at JSON.parse (<anonymous>)
    at file:///E:/Test001/src/dist/client.js:21:18
    at ModuleJob.run (node:internal/modules/esm/module_job:185:25)
    at async Promise.all (index 0)
    at async ESMLoader.import (node:internal/modules/esm/loader:281:24)
    at async loadESM (node:internal/process/esm_loader:88:5)
    at async handleMainPromise (node:internal/modules/run_main:65:12)

*/
