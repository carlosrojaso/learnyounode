var mymodule = require('./mymodule.js');
var i;
mymodule(process.argv[2],process.argv[3],function(err,data){
       data=data.toString();
       var resultado = data.split(",");
       for(i=0; i < resultado.length; i++){    
       console.log(resultado[i]);
       }
});
