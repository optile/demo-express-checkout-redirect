const fs = require('fs-extra');
console.log('generating build folder');
fs.copySync('./node_modules/express-checkout/umd', './build/node_modules/express-checkout/umd');
fs.copySync('./node_modules/react-dom/umd', './build/node_modules/react-dom/umd');
fs.copySync('./node_modules/react/umd', './build/node_modules/react/umd');
fs.copySync('./assets', './build/assets');
fs.copyFile('./cancel.html', './build/cancel.html');
fs.copyFile('./checkout.html', './build/checkout.html');
fs.copyFile('./index.html', './build/index.html');
fs.copyFile('./summary.html', './build/summary.html');
fs.copyFile('./thankyou.html', './build/thankyou.html');
fs.copyFile('./config.js', './build/config.js');
