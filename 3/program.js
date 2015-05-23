var fs = require('fs');
//console.log(process.argv);
buf= fs.readFileSync(process.argv[2]);
var str = buf.toString();
var arreglo = str.split('\n');
console.log(arreglo.length-1);
