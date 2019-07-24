require('./home');
console.log('wodelovelove');
import './assets/index.css';
var h1 = document.getElementById('hh1');
var h2 = document.getElementById('hh2');
h1.innerHTML = `process.env.NODE_ENV ${process.env.NODE_ENV}`;
h2.innerHTML = `process.env.PROD_NAME ${process.env.PROD_NAME}`;