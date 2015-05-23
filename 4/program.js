var fs = require('fs');
//console.log(process.argv);
//buf= fs.readFileSync(process.argv[2]);
var buf= "";
fs.readFile(process.argv[2], function (err, data) {
  if (err) throw err;
  buf = data;
  //console.log(data);
  var str = buf.toString();
var arreglo = str.split('\n');
console.log(arreglo.length-1);
});
