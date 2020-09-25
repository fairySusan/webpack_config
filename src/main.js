require('./home');
console.log('wodelovelove');
import './assets/index.less'; // CSS 模块化
import img from './assets/1.png';
var h1 = document.getElementById('hh1');
var h2 = document.getElementById('hh2');
var imgDom = document.getElementById('img');
h1.innerHTML = `process.env.NODE_ENV  ${process.env.NODE_ENV}`;
h2.innerHTML = `process.env.PROD_NAME ${process.env.PROD_NAME}`;
console.log(img.size)