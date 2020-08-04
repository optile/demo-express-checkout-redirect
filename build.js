const fs = require("fs-extra");
console.log("generating build folder");
fs.copySync("./vendors", "./build/vendors");
fs.copySync("./assets", "./build/assets");
fs.copyFile("./cancel.html", "./build/cancel.html");
fs.copyFile("./checkout.html", "./build/checkout.html");
fs.copyFile("./index.html", "./build/index.html");
fs.copyFile("./summary.html", "./build/summary.html");
fs.copyFile("./thankyou.html", "./build/thankyou.html");
fs.copyFile("./config.js", "./build/config.js");
