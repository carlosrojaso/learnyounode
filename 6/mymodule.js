function bar (dirPath, ext, callback) {
      var fs = require('fs');
       fs.readdir(dirPath, function(err, files){
               
                if(err != null){
                        callback(err);
                }else{
                        var filesArray = [];
                        //Noob mode
                        for(var i=0; i < files.length; i++){
                                var file = files[i];
                                var filename = file.split('.');
                                if(filename[1] === ext){
                                        filesArray.push(file);
                                }
                        }
 
                        callback(null, filesArray);
                }
        });
    }

module.exports = bar;
