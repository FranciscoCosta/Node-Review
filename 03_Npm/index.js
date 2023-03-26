//istall globaly
//npm install -g nodemon
console.log("Hello World!");

//npm init -y to start package.json

//npm install date-fns
//goes to dependencies in package.json in productions

//npm install --save-dev date-fns
//goes to devDependencies in package.json in development

const { format } = require("date-fns");
console.log(format(new Date(), "dd/MM/yyyy"));
