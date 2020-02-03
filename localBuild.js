const fs = require('fs-extra');
fs.copySync('./node_modules/express-checkout/umd', './vendors');
fs.copySync('./node_modules/react-dom/umd', './vendors');
fs.copySync('./node_modules/react/umd', './vendors');
