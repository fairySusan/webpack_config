 // require('./home');
import moment from 'moment';
console.log('我的maingjs');
import './assets/index.less'; // CSS 模块化
var h1 = document.getElementById('hh1');
var h2 = document.getElementById('hh2');
h1.innerHTML = `process.env.NODE_ENV  ${process.env.NODE_ENV } ${moment().format('YYYY-MM-DD')}`;
h2.innerHTML = `process.env.PROD_NAME ${process.env.PROD_NAME}`;
