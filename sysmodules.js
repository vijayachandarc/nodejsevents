const getEmp = require('./index');

getEmp('chandar');

// system modules:

/** path **/

const path = require('path');

console.log(path.parse(__filename).base);

/** os **/

const os = require('os');
var totalmem = os.totalmem();

//console.log(totalmem);
console.log('free memory: '+os.freemem());

// Ecmascript

console.log(`total memory: ${totalmem}`);

/** fs **/
const fs = require('fs');

console.log(fs.readdirSync('./'));

fs.readdir('./', function(err, files) {
	if (err) console.log('Error : '+err);
	else console.log('Result : '+files); 

});