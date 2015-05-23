var fs = require('fs');
var path = require('path');
var extension = "." + process.argv[3];
var i;
var tmpfile;
//console.log(process.argv);
var buf= "";
fs.readdir(process.argv[2], function (err, data) {
  if (err) throw err;
  buf = data;
  //console.log(data);
  var str = buf.toString();
  //console.log(str);
  var arreglo = str.split(',');
  for(i=0;i<arreglo.length;i++){
   tmpfile = path.extname(arreglo[i]);
   if(tmpfile == extension){
    console.log(arreglo[i]);
   }
  }

});
